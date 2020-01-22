import React from 'react';
import { State, Todo } from './model/types';
import { connect } from 'react-redux';
import { getTodos } from './model/todos';
import { css } from "@emotion/core";
import { FadeLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

interface AppProps {
	isLoading: boolean;
	todos: Todo[];
}

interface AppDispatches {
	getTodos(): Promise<void>;
}

type CombinedProps = AppProps & AppDispatches;

class App extends React.PureComponent<CombinedProps> {
	componentDidMount() {
		this.props.getTodos();
	}

	render() {
		const { isLoading } = this.props;

		console.log(this.props);

		if (isLoading) {
			return <FadeLoader
				css={override}
				color={'#123abc'}
				loading={isLoading}
			/>;
		}

		return <div>App working</div>;
	}
}

const mapStateToProps = (state: State) => ({
	isLoading: state.isLoading,
	todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
	getTodos() {
		dispatch(getTodos());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
