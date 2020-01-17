import React from 'react';
import Redux from 'redux';
import { State } from './model/types';
import { connect, ReactReduxContextValue } from 'react-redux';

interface AppProps {
	isLoading: boolean;
}

class App extends React.PureComponent<AppProps> {
	componentDidMount() {
		// call action to fetch data
	}


	render () {
		const {
			isLoading
		} = this.props;
	
		if (isLoading) {
			return <div>Loading...</div>;
		}
		
		return <div>App working</div>
	}
};

const mapStateToProps = (state: State) => ({
	isLoading: state.isLoading,
});

export default connect(mapStateToProps)(App);
