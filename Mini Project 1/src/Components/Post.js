import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const posts = [
    { id: 1, title: 'First Post', content: 'This is the full content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the full content of the second post.' },
    // Add more posts here
];

function Post() {
    const { id } = useParams();
    const post = posts.find(post => post.id === parseInt(id));

    return (
        <div>
            {post ? (
                <Card>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.content}</Card.Text>
                    </Card.Body>
                </Card>
            ) : (
                <p>Post not found.</p>
            )}
        </div>
    );
}

export default Post;