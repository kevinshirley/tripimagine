import { UPLOAD_FILE } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
  uploadStatus: false,
  file: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_FILE: 
      return {
        ...state,
        uploadStatus: !isEmpty(action.payload),
        file: action.payload
      }
    default: 
      return state;
  }
}
