import { combineReducers } from 'redux';
import games from './games';
import date from './date';
import startDate from './startDate';
import endDate from './endDate';
import todayDate from './todayDate';
import isLoading from './isLoading';

const rootReducer = combineReducers({
    games,
    date,
    startDate,
    endDate,
    todayDate,
    isLoading,
});

export default rootReducer;