import {
  GET_BIKELIST_SUCCESS,
  GET_BIKELIST_ERROR,
  POST_BIKELIST_SUCCESS,
  POST_BIKELIST_ERROR,
  DELETE_BIKELIST_ERROR,
  DELETE_BIKELIST_SUCCESS,
  PATCH_BIKELIST_SUCCESS,
  PATCH_BIKELIST_ERROR,
} from '../constants/bikeList';

const initState = {
  bikeList: undefined,
  isFetching: false,
  error: undefined,
};

export function bikeListReducer(state = initState, action) {
  switch (action.type) {
    case GET_BIKELIST_SUCCESS:
      return {
        ...state,
        bikeList: action.payload,
        error: undefined,
      };
    case GET_BIKELIST_ERROR:
    case POST_BIKELIST_ERROR:
    case DELETE_BIKELIST_ERROR:
    case PATCH_BIKELIST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case POST_BIKELIST_SUCCESS:
    case DELETE_BIKELIST_SUCCESS:
    case PATCH_BIKELIST_SUCCESS:
      return {
        ...state,
        error: undefined,
      };
    default:
      return state;
  }
}
