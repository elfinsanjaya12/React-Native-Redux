import { GET_ARTICLES } from './actionTypes';

export const getArticles = (data) => {
	return {
		type: GET_ARTICLES,
		payload: data
	};
};