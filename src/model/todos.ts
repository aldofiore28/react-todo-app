import { Action } from '../utils/redux-utils';
import { Todo } from './types';
import { setIsLoading } from './loading';
import { fetchListOfTodos } from '../services/todoService';

type TodoAction = Action<Todo[]>;

export enum TodosActions {
	FETCH_TODOS = 'FETCH_TODO',
	SET_TODOS = 'SET_TODOS',
	FETCH_TODOS_ERROR = 'FETCH_TODO',
}

export const fetchTodos = (payload: Todo[] = []): TodoAction => ({
	type: TodosActions.FETCH_TODOS,
	payload,
});

export const setTodos = (payload: Todo[]): TodoAction => ({
	type: TodosActions.SET_TODOS,
	payload,
});

export const fetchTodosError = (payload: any): TodoAction => ({
	type: TodosActions.FETCH_TODOS_ERROR,
	payload,
});

const defaultState: Todo[] = [];

export const reducer = (state: Todo[] = defaultState, action: TodoAction) => {
	switch (action.type) {
		case TodosActions.FETCH_TODOS:
			return action.payload;
		case TodosActions.SET_TODOS:
			return action.payload;
		case TodosActions.FETCH_TODOS_ERROR:
			return action.payload;
		default:
			return state;
	}
};

export const getTodos = () => async dispatch => {
	dispatch(fetchTodos());
	try {
		const todos: Todo[] = await fetchListOfTodos();
		dispatch(setIsLoading(false));
		dispatch(setTodos(todos));
	} catch (error) {
		dispatch(fetchTodosError(error.message));
	}
};
