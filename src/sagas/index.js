import {
  fetchProductsWorkerSaga,
} from "./products";
import {
  fork,
 takeLatest,
  all,
 } from "redux-saga/effects";
import * as actionTypes from "../constants/action-types";




export const productsWatcherSaga = function* () {

  yield takeLatest(actionTypes.FETCH_PRODUCTS, fetchProductsWorkerSaga);


};



export const rootSaga = function* () {


  //run multiple watcher sagas in parallel
  yield all([fork(productsWatcherSaga)]);
};




