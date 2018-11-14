import { combineReducers } from 'redux';
import games from './games';
import date from './date';
import startDate from './startDate';
import endDate from './endDate';

const rootReducer = combineReducers({
    games,
    date,
    startDate,
    endDate,
});

export default rootReducer;