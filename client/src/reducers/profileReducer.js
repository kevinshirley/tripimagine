import { GET_PROFILES, GET_PROFILE, PROFILE_LOADING, MANAGE_TRIP, CLEAR_CURRENT_PROFILE, MANAGE_PROFILE, RESET_MANAGE_PROFILE } from '../actions/types';

const initialState = {
  profile: null,
  profiles: null,
  manageTrip: null,
  manageProfile: {},
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING: 
      return {
        ...state,
        loading: true
      }
    case GET_PROFILES: 
      return {
        ...state,
        profiles: action.payload,
        loading: false
      }
    case GET_PROFILE: 
      return {
        ...state,
        profile: action.payload,
        loading: false
      }
    case CLEAR_CURRENT_PROFILE: 
      return {
        ...state,
        profile: null
      }
    case MANAGE_TRIP: 
      return {
        ...state,
        manageTrip: action.payload
      }
    case MANAGE_PROFILE: 
      return {
        ...state,
        manageProfile: {
          success: 'Updated profile with success'
        }
      }
    case RESET_MANAGE_PROFILE: 
      return {
        ...state,
        manageProfile: action.payload
      }
    default: 
      return state;
  }
}
