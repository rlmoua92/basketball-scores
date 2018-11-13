import axios from 'axios';
import { SET_GAMES } from './types';

const apiUrl = 'https://cors.io/?https://data.nba.com';

export const getGames = (path) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/${path}`)
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