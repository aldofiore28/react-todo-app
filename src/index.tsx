import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { Store } from 'redux';
import createStore from './model/configureStore';
import { State } from './model/types';

const store: Store<State> = createStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
