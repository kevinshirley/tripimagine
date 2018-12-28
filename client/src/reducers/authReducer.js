import { SET_CURRENT_USER, MANAGE_USER, RESET_MANAGE_USER } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
  isAuthenticated: false,
  user: {},
  manageUser: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER: 
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    case MANAGE_USER: 
      return {
        ...state,
        user: action.payload,
        manageUser: {
          success: 'Updated user info with success'
        }
      }
    case RESET_MANAGE_USER: 
      return {
        ...state,
        manageUser: action.payload
      }
    default: 
      return state;
  }
}
