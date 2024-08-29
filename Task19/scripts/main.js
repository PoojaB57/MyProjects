// Task 1: Fetch movie data from an API and display it as cards in the UI
function fetchMovieData() {
    const apiUrl = 'https://api.sampleapis.com/movies/action-adventure'; // Sample API URL

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayMovies(data);
        })
        .catch(error => {
            console.error('Error fetching the movie data:', error);
        });
}

function displayMovies(movies) {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = ''; // Clear previous content

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';

        const title = document.createElement('h3');
        title.textContent = movie.title;

        const year = document.createElement('p');
        year.textContent = `Year: ${movie.year}`;

        const genre = document.createElement('p');
        genre.textContent = `Genre: ${movie.genres.join(', ')}`;

        movieCard.appendChild(title);
        movieCard.appendChild(year);
        movieCard.appendChild(genre);

        movieContainer.appendChild(movieCard);
    });
}

fetchMovieData();

// Task 2: Get data from the user and display it using a callback function
function getUserData(callback) {
    document.getElementById('userForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const userData = document.getElementById('userData').value;
        callback(userData);
    });
}

function displayUserData(data) {
    const displayArea = document.getElementById('userDataDisplay');
    displayArea.textContent = `You entered: ${data}`;
}

getUserData(displayUserData);
