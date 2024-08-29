import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

const posts = [
    { id: 1, title: 'First Post', excerpt: 'This is a short description of the first post.' },
    { id: 2, title: 'Second Post', excerpt: 'This is a short description of the second post.' },
    // Add more posts here
];

function Home() {
    return (
        <div>
            <h1>Blog Posts</h1>
            <Row>
                {posts.map(post => (
                    <Col key={post.id} md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.excerpt}</Card.Text>
                                <Button as={Link} to={`/post/${post.id}`} variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Home;