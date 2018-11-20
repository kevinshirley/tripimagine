import axios from 'axios';
import qs from 'qs';

import { UPLOAD_FILE, GET_ERRORS } from './types';

export const uploadFIle = (file) => dispatch => {
  console.log('inner file action');
  console.log(file);
  // let testObj = {
  //   name: 'test',
  //   age: 25,
  //   type: 'file'
  // };
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    // config: { headers: { 'Content-Type': 'multipart/form-data' } },
    // data: qs.stringify(file),
    data: file,
    url: 'http://localhost:5000/files/upload'
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