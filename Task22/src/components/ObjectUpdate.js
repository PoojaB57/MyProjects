import React, { useState } from 'react';

function ObjectUpdate() {
    const [product, setProduct] = useState({
        name: 'Laptop',
        price: 1500,
        manufacturer: 'TechBrand'
    });

    const updateProduct = () => {
        setProduct(prevState => ({
            ...prevState,
            price: 1200,
            manufacturer: 'NewTech'
        }));
    };

    return (
        <div>
            <h2>Object Update</h2>
            <p>Name: {product.name}</p>
            <p>Price: ${product.price}</p>
            <p>Manufacturer: {product.manufacturer}</p>
            <button onClick={updateProduct}>Update Product</button>
        </div>
    );
}

export default ObjectUpdate;