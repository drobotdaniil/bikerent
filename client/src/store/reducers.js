import { combineReducers } from 'redux';
import { bikeListReducer } from './reducers/bikeListReducer';

export default function createRootReducer() {
  return combineReducers({
    bikeList: bikeListReducer,
  });
}
