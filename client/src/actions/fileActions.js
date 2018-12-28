import axios from 'axios';

import { UPLOAD_FILE, GET_FILES, GET_ERRORS } from './types';

export const uploadFIle = (file) => dispatch => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: file,
    url: 'http://www.tripimagine.com:5000/files/upload'
    // #deploymentVariableToChange
  }; // 'http://www.tripimagine.com:5000/files/profile'

  axios(options)
    .then(res => {
      dispatch({
        type: UPLOAD_FILE,
        payload: res.data
      })
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

export const getFiles = (userId) => dispatch => {
  let url = 'http://www.tripimagine.com:5000/files/'+userId;
  // #deploymentVariableToChange
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: url
  }; // 'http://www.tripimagine.com:5000/files/user/'+userId

  axios(options)
    .then(res => {
      dispatch({
        type: GET_FILES,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    });
}