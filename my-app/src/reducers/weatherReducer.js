import {
  FETCH_WEATHER_DATA_START,
  FETCH_WEATHER_DATA_SUCCESS,
  FETCH_WEATHER_DATA_FAILURE
} from '../actions';

const initialState = {
  weathers: [],
  isLoading: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_WEATHER_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case FETCH_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        weathers: action.payload,
        error: ''
      };
    default:
      return state;
  }
};
