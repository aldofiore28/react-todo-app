import { ReducersMapObject, combineReducers } from 'redux';
import { reducer as isLoading } from './loading';
import { State } from './types';

const reducerMap: ReducersMapObject<State> = {
	isLoading,
};

export default combineReducers<State>(reducerMap);