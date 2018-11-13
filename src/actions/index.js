import axios from 'axios';
import { 
  SET_GAMES, 
  SET_DATE 
} from './types';
import {
  convertDate,
} from '../common.js';

const apiUrl = 'https://cors.io/?https://data.nba.com';

export const getGames = () => {
  return (dispatch, getState) => {
    const state = getState();
    const date = convertDate(state.date, 'yyyymmdd');
    return axios.get(`${apiUrl}/prod/v1/${date}/scoreboard.json`)
      .then(response => {
        dispatch(setGames(response.data.games))
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
  }
};

export const setDate = (date) => {
  return {
    type: SET_DATE,
    date,
  }
};