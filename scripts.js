// Fetch movies data from API
async function fetchMovies() {
    const response = await fetch('https://api.example.com/movies');
    const data = await response.json();
    return data;
}const apiKey = 'YOUR_TMDB_API_KEY';

// Fetch popular movies from TMDb API
async function fetchPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

// Display popular movies on the homepage
async function displayPopularMovies() {
    const movieListElement = document.getElementById('movieList');
    const movies = await fetchPopularMovies();

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.release_date}</p>
            <p>Rating: ${movie.vote_average}</p>
        `;
        movieItem.addEventListener('click', () => showMovieDetails(movie.id));
        movieListElement.appendChild(movieItem);
    });
}

// Fetch and display movie details in modal
async function showMovieDetails(movieId) {
    const movieDetailsModal = document.getElementById('movieDetailsModal');
    const modalContent = document.getElementById('modalContent');
    
    const movieDetails = await fetchMovieDetails(movieId);
    
    modalContent.innerHTML = `
        <h2>${movieDetails.title}</h2>
        <p><strong>Genres:</strong> ${movieDetails.genres.map(genre => genre.name).join(', ')}</p>
        <p><strong>Overview:</strong> ${movieDetails.overview}</p>
        <p><strong>Release Date:</strong> ${movieDetails.release_date}</p>
        <p><strong>Runtime:</strong> ${movieDetails.runtime} minutes</p>
    `;
    
    movieDetailsModal.style.display = 'block';
}

// Fetch movie details from TMDb API
async function fetchMovieDetails(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


// Display movies on the homepage
async function displayMovies() {
    const movieListElement = document.getElementById('movieList');
    const movies = await fetchMovies();

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.release_date}</p>
            <p>Rating: ${movie.rating}</p>
        `;
        movieItem.addEventListener('click', () => showMovieDetails(movie));
        movieListElement.appendChild(movieItem);
    });
}

// Show movie details in modal
function showMovieDetails(movie) {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <h2>${movie.title}</h2>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Cast:</strong> ${movie.cast.join(', ')}</p>
        <p><strong>Synopsis:</strong> ${movie.synopsis}</p>
        <iframe width="560" height="315" src="${movie.trailer}" frameborder="0" allowfullscreen></iframe>
    `;
    const modal = document.getElementById('movieDetailsModal');
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('movieDetailsModal');
    modal.style.display = 'none';
}

// Search movies by keyword
function searchMovies() {
    const searchTerm = document.getElementById('searchInput').value;
    // Implement search functionality (e.g., filter movies based on searchTerm)
    console.log(`Searching movies for: ${searchTerm}`);
}

// Submit registration form
document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const userData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
    };
    // Implement user registration logic (e.g., send userData to server)
    console.log('User registration submitted:', userData);
});
// Social sharing functions
function shareOnFacebook() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=YOUR_WEBSITE_URL', '_blank');
}

function shareOnTwitter() {
    window.open('https://twitter.com/intent/tweet?url=YOUR_WEBSITE_URL&text=Check%20out%20this%20awesome%20movie!', '_blank');
}

function shareOnFacebook() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=YOUR_WEBSITE_URL', '_blank');
}

function shareOnTwitter() {
    window.open('https://twitter.com/intent/tweet?url=YOUR_WEBSITE_URL&text=Check%20out%20this%20awesome%20movie!', '_blank');
}// Fetch trending movies from TMDb API
async function fetchTrendingMovies() {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

// Display trending movies on the homepage
async function displayTrendingMovies() {
    const trendingListElement = document.getElementById('trendingList');
    const trendingMovies = await fetchTrendingMovies();

    trendingMovies.forEach(movie => {
        const trendingItem = document.createElement('div');
        trendingItem.classList.add('trending-item');
        trendingItem.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.release_date}</p>
            <p>Popularity: ${movie.popularity}</p>
        `;
        trendingListElement.appendChild(trendingItem);
    });
}

// Call function to display trending movies
displayTrendingMovies();
// Fetch related movies based on genre
async function fetchRelatedMovies(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}&language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

// Display related movies on movie detail page
async function displayRelatedMovies(movieId) {
    const relatedListElement = document.getElementById('relatedMovies');
    const relatedMovies = await fetchRelatedMovies(movieId);

    relatedMovies.forEach(movie => {
        const relatedItem = document.createElement('div');
        relatedItem.classList.add('related-item');
        relatedItem.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.release_date}</p>
            <p>Rating: ${movie.vote_average}</p>
        `;
        relatedListElement.appendChild(relatedItem);
    });
}

// Call function to display related movies for a specific movie
const movieId = 'MOVIE_ID_HERE'; // Replace with the actual movie ID
displayRelatedMovies(movieId);

