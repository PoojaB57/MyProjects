import React from 'react';
import ArrayUpdate from './components/ArrayUpdate';
import ObjectUpdate from './components/ObjectUpdate';
import DataTypeState from './components/DataTypeState';

function App() {
    return (
        <div className="App">
            <h1>React State & Hooks Practice</h1>
            <ArrayUpdate />
            <ObjectUpdate />
            <DataTypeState />
        </div>
    );
}

export default App;