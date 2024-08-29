import React, { useState } from 'react';

function ArrayUpdate() {
    const [items, setItems] = useState([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
    ]);

    const updateSecondItem = () => {
        const newItems = [...items];
        newItems[1] = { ...newItems[1], name: 'Updated Item 2' };
        setItems(newItems);
    };

    return (
        <div>
            <h2>Array Update</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <button onClick={updateSecondItem}>Update Second Item</button>
        </div>
    );
}

export default ArrayUpdate;