import { CHANGE_CATEGORY, HERO_ERROR, HERO_LOADING, HERO_DATA } from '../types'

const initialState = {
  loading: false,
  error: false,
  person: {
    "id": "0",
    "name": "Ivan",
    "armor": "0",
    "attack": "0",
    "health": "0",
    "img": "",
    "alt-img": ""
  },
  "helmets":{
    "armor": "0",
    "attack": "0",
    "health": "0",
    "id": "0",
    "img": "",
    "name": "",
    "price": "0"
},
  "gloves":{
    "armor": "0",
    "attack": "0",
    "health": "0",
    "id": "0",
    "img": "",
    "name": "",
    "price": "0"
},
  "chests":{
    "armor": "0",
    "attack": "0",
    "health": "0",
    "id": "0",
    "img": "",
    "name": "",
    "price": "0"
},
  "boots":{
    "armor": "0",
    "attack": "0",
    "health": "0",
    "id": "0",
    "img": "",
    "name": "",
    "price": "0"
},
  "swords":{
    "armor": "0",
    "attack": "0",
    "health": "0",
    "id": "0",
    "img": "",
    "name": "",
    "price": "0"
}
}

const categoryes = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_CATEGORY:
      return {
        ...state,
        [action.categoryName]: action.item
      };
    case HERO_ERROR:
      return {
        ...state,
        error: action.error
      };
    case HERO_LOADING:
      return {
        ...state,
        loading: action.loading
      };
    case HERO_DATA:
      return {
        ...state,
        person: action.data
      };
    default: return state;
  }
}
export default categoryes;