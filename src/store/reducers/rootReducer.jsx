import { combineReducers } from 'redux';
import gameData from './gameData';
import categories from './gameStats';

const rootReducer = combineReducers({
  gameData,
  categories
});

export default rootReducer;