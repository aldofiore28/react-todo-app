import { BooleanAction } from '../utils/redux-utils';

export enum LoadingActions {
	IS_LOADING = 'IS_LOADING_GENERAL',
}

export const setIsLoading = (payload: boolean) =>
	<BooleanAction>{
		type: LoadingActions.IS_LOADING,
		payload,
	};

const defaultState = true;

export const reducer = (
	state: boolean = defaultState,
	action: BooleanAction
) => {
	switch (action.type) {
		case LoadingActions.IS_LOADING:
			return action.payload;
		default:
			return state;
	}
};
