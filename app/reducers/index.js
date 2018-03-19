import { combineReducers } from 'redux';
import schedule from './schedule';
import food from './food';

export default combineReducers({
    schedule, food
});