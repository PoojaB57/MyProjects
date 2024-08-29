import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`https://api.example.com/movies/${id}`) // Replace with actual movie API URL
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div>
            <h2>{movie.name}</h2>
            <img src={movie.image} alt={movie.name} />
            <p>{movie.description}</p>
        </div>
    );
}

export default MovieDetail;