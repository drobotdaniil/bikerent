import {
  GET_BIKELIST_SUCCESS,
  GET_BIKELIST_ERROR,
  POST_BIKELIST_SUCCESS,
  POST_BIKELIST_ERROR,
  DELETE_BIKELIST_SUCCESS,
  DELETE_BIKELIST_ERROR,
  PATCH_BIKELIST_SUCCESS,
  PATCH_BIKELIST_ERROR,
} from '../constants/bikeList';
import { bikeListAPI } from '../../web-api/bikeList';

const getBikeListSuccess = (giftingList) => ({
  type: GET_BIKELIST_SUCCESS,
  payload: giftingList,
});

const getBikeListError = (err) => ({
  type: GET_BIKELIST_ERROR,
  payload: err,
});

export const getBikeList = () => (dispatch) => {
  bikeListAPI
    .getBikeList()
    .then((res) => {
      if (res) {
        dispatch(getBikeListSuccess(res));
      }
      return res;
    })
    .catch((err) => {
      dispatch(getBikeListError(err));
    });
};

const addBikeToListSuccess = () => ({
  type: POST_BIKELIST_SUCCESS,
});

const addBikeToListError = (err) => ({
  type: POST_BIKELIST_ERROR,
  payload: err,
});

export const addBikeToList = (bike) => (dispatch) => {
  bikeListAPI
    .addBikeToList(bike)
    .then((res) => {
      if (res) {
        dispatch(addBikeToListSuccess());
        dispatch(getBikeList());
      }
    })
    .catch((err) => {
      dispatch(addBikeToListError(err));
    });
};

const deleteBikeFromListSuccess = () => ({
  type: DELETE_BIKELIST_SUCCESS,
});

const deleteBikeFromListError = (err) => ({
  type: DELETE_BIKELIST_ERROR,
  payload: err,
});

export const deleteBikeFromList = (body) => (dispatch) => {
  bikeListAPI
    .deleteBikeFromList(body)
    .then((res) => {
      if (res) {
        dispatch(deleteBikeFromListSuccess());
        dispatch(getBikeList());
      }
    })
    .catch((err) => {
      dispatch(deleteBikeFromListError(err));
    });
};

const patchBikeSuccess = () => ({
  type: PATCH_BIKELIST_SUCCESS,
});

const patchBikeError = (err) => ({
  type: PATCH_BIKELIST_ERROR,
  payload: err,
});

export const patchBike = (body) => (dispatch) => {
  bikeListAPI
    .changeBike(body)
    .then((res) => {
      if (res) {
        dispatch(patchBikeSuccess());
        dispatch(getBikeList());
      }
    })
    .catch((err) => {
      dispatch(patchBikeError(err));
    });
};
