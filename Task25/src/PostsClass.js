import React, { Component } from 'react';

class PostsClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(data => this.setState({ posts: data.slice(0, 5) }))
            .catch(error => this.setState({ error }));
    }

    render() {
        const { posts, error } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
            <div>
                <h2>First 5 Posts</h2>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PostsClass;