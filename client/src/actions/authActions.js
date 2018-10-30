import axios from 'axios';
import qs from 'qs';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

export const registerUser = (userData, history) => dispatch => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(userData),
    url: 'http://localhost:5000/users/register'
  }; // 'http://www.tripimagine.com:5000/users/register'

  axios(options)
    .then(res => history.push('/login'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

// get user token
export const loginUser = userData => dispatch => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(userData),
    url: 'http://localhost:5000/users/login'
  }; // 'http://www.tripimagine.com:5000/users/login'

  axios(options)
    .then(res => {
      // save to localstorage
      const { token } = res.data;

      // set token to localstorage
      localStorage.setItem('jwtToken', token);

      // set token to auth header
      setAuthToken(token);

      // decode token to get user data
      const decoded = jwt_decode(token);

      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

// set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

export const logoutUser = (history) => dispatch => {
  // remove token from localStorage
  localStorage.removeItem('jwtToken');
  // remove auth header for future requests
  setAuthToken(false);
  // set the current user to an empty obj, which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  // redirect to home
  history.push('/login');
}
