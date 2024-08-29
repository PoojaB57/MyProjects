import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchProductsSuccess, fetchProductsFailure } from '../features/products/productsSlice';

function* fetchProductsSaga() {
    try {
        const response = yield call(fetch, 'https://api.example.com/products');
        const data = yield response.json();
        yield put(fetchProductsSuccess(data));
    } catch (error) {
        yield put(fetchProductsFailure(error.toString()));
    }
}

function* rootSaga() {
    yield all([
        takeLatest('products/fetchProductsStart', fetchProductsSaga),
    ]);
}

export default rootSaga;