import React, { useState } from 'react';

function ProductInfo() {
    const [product, setProduct] = useState({
        name: 'Laptop',
        price: 1500,
        manufacturer: 'TechBrand',
        warranty: '2 years'
    });

    const updateProduct = () => {
        setProduct(prevState => ({
            ...prevState,
            price: 1200,
            warranty: '3 years'
        }));
    };

    return (
        <div>
            <h2>Product Information</h2>
            <p>Name: {product.name}</p>
            <p>Price: ${product.price}</p>
            <p>Manufacturer: {product.manufacturer}</p>
            <p>Warranty: {product.warranty}</p>
            <button onClick={updateProduct}>Update Product</button>
        </div>
    );
}

export default ProductInfo;