import { combineReducers } from 'redux';
import productsReducer from '../features/products/productsSlice';
import userReducer from '../features/user/userSlice';

const rootReducer = combineReducers({
    products: productsReducer,
    user: userReducer,
});

export default rootReducer;