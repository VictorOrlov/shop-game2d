import { ERROR, LOADING, DATA } from '../types';

export const errorData = bool => {
  return {
    type: ERROR,
    error: bool
  }
};

export const isLoading = bool => {
  return {
    type: LOADING,
    loading: bool
  }
};

export const isData = data => {
  return {
    type: DATA,
    data
  }
};

export const fetchData = url => {
  return (dispatch) => {
    dispatch(isLoading(true));
    fetch(url)
      .then(response => {
        if(!response.ok){
          throw Error(response.statusText);
        }
        dispatch(isLoading(false));
        return response
      })
      .then(response => response.json())
      .then(data => dispatch(isData(data)))
      .catch(() => dispatch(errorData(true)))
  };
}