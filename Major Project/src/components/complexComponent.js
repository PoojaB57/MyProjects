import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsActions';

const ComplexComponent = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.items);
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            <h2>Products for {user ? user.name : 'Guest'}</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default ComplexComponent;