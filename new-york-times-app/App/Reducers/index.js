import { combineReducers } from 'redux';
import IconReducer from './IconReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
  icon: IconReducer,
  search: SearchReducer
})
