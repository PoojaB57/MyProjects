import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import ProductInfo from './components/ProductInfo';

function App() {
    return (
        <div className="App">
            <h1>React State Management</h1>
            <EmployeeList />
            <ProductInfo />
        </div>
    );
}

export default App;