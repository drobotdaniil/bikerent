import { createSelector } from 'reselect';

const selectBikeListFunc = (state) => state.bikeList.bikeList;

export const selectBikeList = createSelector(selectBikeListFunc, bikeList => bikeList);