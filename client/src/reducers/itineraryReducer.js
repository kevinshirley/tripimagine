import { 
  GET_ITINERARIES, 
  SELECTED_ITINERARY, 
  GET_CLIENT_ITINERARIES, 
  SELECTED_CLIENT_ITINERARY 
} from '../actions/types';

const initialState = {
  itineraries: [],
  selectedItinerary: '',
  clientItineraries: [],
  selectedClientItinerary: '',
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
    case GET_CLIENT_ITINERARIES: 
      return {
        ...state,
        clientItineraries: action.payload,
        loading: false
      }
    case SELECTED_CLIENT_ITINERARY: 
      return {
        ...state,
        selectedClientItinerary: action.payload,
        loading: false
      }
    default: 
      return state;
  }
}
