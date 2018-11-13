import { combineReducers } from 'redux';
import games from './games';
import date from './date';

const rootReducer = combineReducers({
    games,
    date,
});

export default rootReducer;