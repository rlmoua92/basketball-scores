import axios from 'axios';
import { 
  SET_GAMES, 
  SET_DATE,
  SET_START_DATE,
  SET_END_DATE,
  SET_IS_LOADING,
} from './types';

import { scrollElementLeft } from '../common.js';

const apiUrl = 'https://cors.io/?https://data.nba.com';

export const getGames = () => {
  return (dispatch, getState) => {
    const state = getState();
    return axios.get(`${apiUrl}/prod/v1/${state.date}/scoreboard.json`)
      .then(response => {
        dispatch(setGames(response.data.games));
        dispatch(setIsLoading(false));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const setGames = (games) => {
  return {
    type: SET_GAMES,
    games,
  };
};

export const setDate = (date) => {
  return {
    type: SET_DATE,
    date,
  };
};

export const getDates= () => {
  return (dispatch, getState) => {
    return axios.get(`${apiUrl}/prod/v1/calendar.json`)
      .then(response => {
        dispatch(setStartDate(response.data.startDateCurrentSeason));
        dispatch(setEndDate(response.data.endDate));
        scrollElementLeft('date-list','date-list-item selected');
      })
      .catch(error => {
        throw(error);
      });
  };
}

export const setStartDate = (date) => {
  return {
    type: SET_START_DATE,
    date,
  };
};

export const setEndDate = (date) => {
  return {
    type: SET_END_DATE,
    date,
  };
};

export const setIsLoading = (isLoading) => {
  return {
    type: SET_IS_LOADING,
    isLoading,
  };
}