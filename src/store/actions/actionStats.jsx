import { CHANGE_CATEGORY, HERO_ERROR, HERO_LOADING, HERO_DATA } from '../types';

export const changeCategory = (categoryName, item) => {
  return {
    type: CHANGE_CATEGORY,
    categoryName,
    item
  }
};

export const errorHeroData = bool => {
  return {
    type: HERO_ERROR,
    error: bool
  }
};

export const isLoadingHero = bool => {
  return {
    type: HERO_LOADING,
    loading: bool
  }
};

export const isHeroData = data => {
  return {
    type: HERO_DATA,
    data
  }
};

export const fetchDataHero = url => {
  return (dispatch) => {
    dispatch(isLoadingHero(true));
    fetch(url)
      .then(response => {
        if(!response.ok){
          throw Error(response.statusText);
        }
        dispatch(isLoadingHero(false));
        return response
      })
      .then(response => response.json())
      .then(data => dispatch(isHeroData(data)))
      .catch(() => dispatch(errorHeroData(true)))
  };
}