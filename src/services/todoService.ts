import { Todo } from '../model/types';

export const fetchListOfTodos = async (): Promise<Todo[]> => {
	const response = await fetch('http://localhost:5050/api/v1/todos/');
	const responseJson = await response.json();

	if (responseJson) {
		return responseJson.data;
	} else {
		throw Error('Request not successful');
	}
};
