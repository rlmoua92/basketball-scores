import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com';

/*export const getInfo = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/users`)
      .then(response => {
        dispatch(setInfo(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};*/