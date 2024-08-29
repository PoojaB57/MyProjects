import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from './productsSlice';

export const fetchProducts = () => async (dispatch) => {
    dispatch(fetchProductsStart());
    try {
        const response = await fetch('https://api.example.com/products');
        const data = await response.json();
        dispatch(fetchProductsSuccess(data));
    } catch (error) {
        dispatch(fetchProductsFailure(error.toString()));
    }

};