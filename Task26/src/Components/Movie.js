import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Movie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.example.com/movies') // Replace with actual movie API URL
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Movies</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <img src={movie.image} alt={movie.name} />
                        <Link to={`/movies/${movie.id}`}>{movie.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Movie;