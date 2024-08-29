import React, { useState } from 'react';
import PropTypes from 'prop-types';

function DataTypeState({ title = "Default Title" }) {
    const [number, setNumber] = useState(0);
    const [string, setString] = useState("Hello World");
    const [boolean, setBoolean] = useState(true);
    const [array, setArray] = useState([1, 2, 3]);
    const [object, setObject] = useState({ key: 'value' });

    return (
        <div>
            <h2>Data Type State</h2>
            <p>Number: {number}</p>
            <p>String: {string}</p>
            <p>Boolean: {boolean.toString()}</p>
            <p>Array: {array.join(', ')}</p>
            <p>Object: {JSON.stringify(object)}</p>
            <p>Title: {title}</p>

            <button onClick={() => setNumber(number + 1)}>Increment Number</button>
            <button onClick={() => setString(string + '!')}>Append to String</button>
            <button onClick={() => setBoolean(!boolean)}>Toggle Boolean</button>
            <button onClick={() => setArray([...array, array.length + 1])}>Add to Array</button>
            <button onClick={() => setObject({ ...object, newKey: 'newValue' })}>Update Object</button>
        </div>
    );
}

DataTypeState.propTypes = {
    title: PropTypes.string
};

export default DataTypeState;