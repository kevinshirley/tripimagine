import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import fileReducer from './fileReducer';
import blogReducer from './blogReducer';
import itineraryReducer from './itineraryReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  file: fileReducer,
  blog: blogReducer,
  itinerary: itineraryReducer
});
