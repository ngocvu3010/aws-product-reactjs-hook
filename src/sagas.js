import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import {getListProductSuccess} from './redux/actions';
import axios from 'axios';

function* getListProductSaga(action) {
  try {

    let url = action.payload
    const data = yield axios.get(url);
    yield put(getListProductSuccess(data.data));
  } catch (error) {
    console.log("error saga" + error);
    yield put({type: 'GET_LIST_PRODUCT_FAILED', payload: error});
  }
}

function* productsSaga() {
  yield takeEvery('GET_LIST_PRODUCT', getListProductSaga);
}

export default productsSaga;
