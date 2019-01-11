import { GET_ARTICLES } from './actionTypes';

const initialState = {
	articles: []
};


const reducers = (state = initialState, action) => {
	if (action.type === GET_ARTICLES) {
		return {
			...state,
			articles: action.payload
		};
	}

	return state;
};

export default reducers;