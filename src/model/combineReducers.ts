import { ReducersMapObject, combineReducers } from 'redux';
import { reducer as isLoading } from './loading';
import {reducer as todos} from './todos';
import { State } from './types';

const reducerMap: ReducersMapObject<State> = {
	isLoading,
	todos,
};

export default combineReducers<State>(reducerMap);
