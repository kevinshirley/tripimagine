import { CURRENT_POST } from './types';

export const currentPost = (slug, title, img, desc, content) => dispatch => {
	dispatch({
    type: CURRENT_POST,
    payload: {
      title: title,
      img: img,
      desc: desc,
      content: content,
      slug: slug
    }
  })
}