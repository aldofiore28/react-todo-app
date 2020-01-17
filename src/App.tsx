import React from 'react';
import { State } from './model/types';
import { connect } from 'react-redux';

interface AppProps {
	isLoading: boolean;
}

const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
	const {
		isLoading
	} = props;

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return <div>App working</div>
};

const mapStateToProps = (state: State) => ({
	isLoading: state.isLoading,
});

export default connect(mapStateToProps)(App);
