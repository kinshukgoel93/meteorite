import { combineReducers } from 'redux';
import Mapreducer from './reducers';


export default combineReducers({
    map : Mapreducer
})