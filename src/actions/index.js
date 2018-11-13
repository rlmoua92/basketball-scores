import axios from 'axios';
import { SET_GAMES } from './types';

const apiUrl = 'https://cors.io/?https://data.nba.com';

export const getGames = (date) => {
  return (dispatch) => {
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