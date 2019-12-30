export interface Action<T> {
	type: string;
	payload?: T;
}

export type BooleanAction = Action<boolean>;