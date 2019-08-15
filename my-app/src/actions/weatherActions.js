import axios from 'axios';

export const FETCH_WEATHER_DATA_START = 'FETCH_WEATHER_DATA_START';
export const FETCH_WEATHER_DATA_SUCCESS= 'FETCH_WEATHER_DATA_SUCCESS';
export const FETCH_WEATHER_DATA_FAILURE= 'FETCH_WEATHER_DATA_FAILURE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_WEATHER_DATA_START });
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(res => {
        console.log(res.data.results);
        dispatch({ type: FETCH_WEATHER_DATA_SUCCESS, payload: res.data.results });
      })
      .catch(err => {
        dispatch({ type: FETCH_WEATHER_DATA_FAILURE, payload: err.response });
      });
  };
};
