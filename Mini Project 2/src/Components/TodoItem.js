import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

function TodoItem({ todo, updateTodo, deleteTodo, handleEdit }) {
    const handleComplete = () => {
        updateTodo(todo.id, { completed: !todo.completed });
    };

    return (
        <ListGroup.Item>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <Button variant="success" className="ml-2" onClick={handleComplete}>
                {todo.completed ? 'Undo' : 'Complete'}
            </Button>
            <Button variant="info" className="ml-2" onClick={handleEdit}>
                Edit
            </Button>
            <Button variant="danger" className="ml-2" onClick={() => deleteTodo(todo.id)}>
                Delete
            </Button>
        </ListGroup.Item>
    );
}

export default TodoItem;