import axios from 'axios';
import qs from 'qs';

import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS } from './types';

// get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());

  const options = {
    method: 'GET',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: 'http://localhost:5000/profile'
  }; // 'http://www.tripimagine.com:5000/profile'

  axios(options)
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    })
    .catch(err => dispatch({
      type: GET_PROFILE,
      payload: {}
    }));
}

// create profile
export const createProfile = (profileData, history) => dispatch => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(profileData),
    url: 'http://localhost:5000/profile'
  }; // 'http://www.tripimagine.com:5000/profile'

  axios(options)
    .then(res => history.push('/dashboard'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

// profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  }
}

// clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  }
}