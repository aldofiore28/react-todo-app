import { BooleanAction } from '../utils/redux-utils';

const IS_LOADING = 'IS_LOADING_GENERAL';

export const setIsLoading = (payload: boolean) =>
	<BooleanAction>{
		type: IS_LOADING,
		payload,
	};

const defaultState = true;

export const reducer = (
	state: boolean = defaultState,
	action: BooleanAction
) => {
	switch (action.type) {
		case IS_LOADING:
			return action.payload;
		default:
			return state;
	}
};
