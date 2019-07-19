import { ERROR, LOADING, DATA } from '../types';
// import axios from 'axios';

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


  // return (dispatch) => {
  //   dispatch(isLoading(true));
  //   axios
  //     .get(url)
  //     .then(response => {
  //       dispatch(isData(response.data));
  //       dispatch(isLoading(false));
  //     })
  //     .catch(() => dispatch(errorData(true)))
  // };
}