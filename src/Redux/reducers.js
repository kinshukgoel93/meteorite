import {MAP_DATA_FETCH_STARTED,MAP_DATA_FETCH_SUCCESS,MAP_DATA_FILTER_APPLIED,MAP_DATA_FETCH_FAILED} from './constants'

const INITIAL_STATE = {
  geoPoints: null,
  isloading: false,
  filteredData : null,
  error:null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MAP_DATA_FETCH_STARTED:
      return { ...state, geoPoints: action.payload, isloading: true };
    case MAP_DATA_FETCH_SUCCESS:
      return { ...state, geoPoints: action.payload, isloading: false };
        case MAP_DATA_FETCH_FAILED:
      return { ...state, isloading: false, error: action.payload };  
    case MAP_DATA_FILTER_APPLIED:
      return { ...state, filteredData: action.payload, isloading: false };
    default:
      return state;
  }
};
