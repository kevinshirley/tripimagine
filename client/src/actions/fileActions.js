import axios from 'axios';
import qs from 'qs';

import { UPLOAD_FILE } from './types';

export const uploadFIle = (file) => dispatch => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(file),
    url: 'http://localhost:5000/upload'
  }; // 'http://www.tripimagine.com:5000/profile'

  axios(options)
    .then(res => {
      dispatch({
        type: UPLOAD_FILE,
        payload: res.data
      });
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}