import * as actionTypes from "../constants/action-types";
import { put, call, race, take, select } from "redux-saga/effects";
import * as api from "../api/products";

//put = dispatch


export const fetchProductsWorkerSaga = function* () {
  yield select((state) => {
    console.log(state,"products");
  });

  yield put({ type: actionTypes.FETCH_PRODUCTS_PENDING });
  try {
    
  
    
    //call the promise and wait for its completion
    let { response, fetchCancel } = yield race({
      response: call(api.fetchProducts),
      fetchCancel: take(actionTypes.FETCH_PRODUCTS_CANCEL),
    });


    //if the user clicks on the Cancel button
    if (fetchCancel) {
      yield put({
        type: actionTypes.FETCH_PRODUCTS_REJECTED,
        payload: { message: "Cancelled" },
      });
    } else {
      yield put({ type: actionTypes.FETCH_PRODUCTS_FULFILLED, payload: response.data.products });
    }
  } catch (error) {
    yield put({ type: actionTypes.FETCH_PRODUCTS_REJECTED, payload: error });
  }
};




