import { ERROR, LOADING, DATA } from '../types';

const initialState = {
  loading: false,
  error: false,
  data: []
}

const gameData = (state = initialState, action) => {
  switch(action.type) {
    case ERROR:
      return {
        ...state,
        error: action.error
      };
    case LOADING:
      return {
        ...state,
        loading: action.loading
      };
    case DATA:
      return {
        ...state,
        data: action.data
      };
    default: return state;
  }
}

export default gameData;