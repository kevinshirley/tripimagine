import { GET_ITINERARIES, SELECTED_ITINERARY } from '../actions/types';

const initialState = {
  itineraries: [],
  selectedItinerary: '',
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITINERARIES: 
      return {
        ...state,
        itineraries: action.payload,
        loading: false
      }
    case SELECTED_ITINERARY: 
      return {
        ...state,
        selectedItinerary: action.payload,
        loading: false
      }
    default: 
      return state;
  }
}
