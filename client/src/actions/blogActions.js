import { CURRENT_POST } from './types';

export const currentPost = (title, featuredImg, desc, content, slug) => dispatch => {
	dispatch({
		type: CURRENT_POST,
		payload: {
			title: title,
			featuredImg: featuredImg,
			desc: desc,
			content: content,
			slug: slug
		}
	})
}