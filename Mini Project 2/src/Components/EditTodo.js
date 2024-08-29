import React, { useState } from 'react';

function EditTodo({ todo, updateTodo }) {
    const [updatedText, setUpdatedText] = useState(todo.text);

    const handleUpdate = () => {
        updateTodo(todo.id, { text: updatedText });
    };

    return (
        <div className="mb-3">
            <h4>Edit Task</h4>
            <input
                type="text"
                className="form-control"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
            />
            <button className="btn btn-primary mt-2" onClick={handleUpdate}>
                Update
            </button>
        </div>
    );
}

export default EditTodo;