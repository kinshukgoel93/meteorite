import {MAP_DATA_FETCH_STARTED, MAP_DATA_FETCH_SUCCESS ,MAP_DATA_FILTER_APPLIED} from './constants';
import axios from "axios";
import filterUtil from '../Utils/filterUtil';


export const fetchGeoPoints = () => async dispatch => {
    dispatch({ type: MAP_DATA_FETCH_STARTED });
    var url = "https://data.nasa.gov/resource/y77d-th95.json";
    try {
        const res = await axios.get(url);
        dispatch({
            type: MAP_DATA_FETCH_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        
    }
}


export const fetchfilteredData = (data,from,to) => async dispatch =>{
   const filteredData =  filterUtil(data,from,to);
   dispatch({
    type: MAP_DATA_FILTER_APPLIED,
    payload: filteredData,
});
}