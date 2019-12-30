import React from 'react';
import { State } from './model/types';
import { connect } from 'react-redux';

const App:React.FunctionComponent = (props) => {
	console.log(props);
	return <div>Hello</div>;
};

const mapStateToProps = (state: State) => ({
	isLoading: state.isLoading,
});

export default connect(mapStateToProps)(App);
