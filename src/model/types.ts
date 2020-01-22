export interface State {
	isLoading: boolean;
	todos: Todo[];
}

export interface Todo {
	description: string;
}