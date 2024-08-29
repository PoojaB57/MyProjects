import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);
    const [currentId, setCurrentId] = useState(null);

    const addTodo = (todo) => {
        setTodos([...todos, { id: Date.now(), ...todo }]);
    };

    const updateTodo = (id, updatedTodo) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, ...updatedTodo } : todo)));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleEdit = (id) => {
        setCurrentId(id);
    };

    return (
        <div className="container mt-4">
            <h1>To-Do List</h1>
            <TodoList
                todos={todos}
                addTodo={addTodo}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
                handleEdit={handleEdit}
                currentId={currentId}
            />
        </div>
    );
}

export default App;