import { UPLOAD_FILE, GET_FILES } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
  uploadStatus: false,
  file: {},
  userFiles: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_FILE: 
      return {
        ...state,
        uploadStatus: !isEmpty(action.payload),
        file: action.payload
      }
    case GET_FILES: 
      return {
        ...state,
        userFiles: action.payload
      }
    default: 
      return state;
  }
}
