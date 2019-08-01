import axios from 'axios';

import { GET_ITINERARIES, SELECTED_ITINERARY } from './types';

// get itineraries
export const getItineraries = () => dispatch => {
  const options = {
    method: 'GET',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: 'http://localhost:5000/contentful/itineraries'
    // #deploymentVariableToChange
  }; // 'http://www.tripimagine.com:5000/contentful/itineraries'

  axios(options)
    .then(res => dispatch({
      type: GET_ITINERARIES,
      payload: res.data.items
    }))
    .catch(err => {
      console.log(err);
      // dispatch({
      //   type: GET_PROFILES,
      //   payload: {}
      // });
    });
}

export const selectedItinerary = itineraryPageUrl => dispatch => {
	dispatch({
    type: SELECTED_ITINERARY,
    payload: itineraryPageUrl
  })
}