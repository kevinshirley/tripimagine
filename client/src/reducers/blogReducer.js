import { CURRENT_POST } from '../actions/types';

const initialState = {
  post: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CURRENT_POST: 
      return {
        ...state,
        post: action.payload
      }
    default: 
      return state;
  }
}
