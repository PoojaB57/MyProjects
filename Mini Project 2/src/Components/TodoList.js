import React, { useState } from 'react';
import TodoItem from './TodoItem';
import EditTodo from './EditTodo';

function TodoList({ todos, addTodo, updateTodo, deleteTodo, handleEdit, currentId }) {
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        addTodo({ text: newTodo, completed: false });
        setNewTodo('');
    };

    return (
        <div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add a new task"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button className="btn btn-primary mt-2" onClick={handleAddTodo}>
                    Add
                </button>
            </div>
            <ul className="list-group">
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                        handleEdit={() => handleEdit(todo.id)}
                    />
                ))}
            </ul>
            {currentId && <EditTodo todo={todos.find(todo => todo.id === currentId)} updateTodo={updateTodo} />}
        </div>
    );
}

export default TodoList;