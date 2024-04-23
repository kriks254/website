// Fetch movies data from API
async function fetchMovies() {
    const response = await fetch('https://api.example.com/movies');
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
// Simulated movie data (replace with actual API integration)
const movies = [
    { title: "Movie A", image: "movie_a.jpg", description: "Lorem ipsum dolor sit amet...", },
    { title: "Movie B", image: "movie_b.jpg", description: "Lorem ipsum dolor sit amet...", },
    // Add more movie objects as needed
];

document.addEventListener('DOMContentLoaded', function() {
    // Populate featured movies section
    const movieGrid = document.getElementById('movieGrid');
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.description}</p>
        `;
        movieGrid.appendChild(movieCard);
    });

    // Open and close login modal
    const loginModal = document.getElementById('loginModal');

    window.openLoginModal = function() {
        loginModal.style.display = 'block';
    }

    window.closeLoginModal = function() {
        loginModal.style.display = 'none';
    }
});
// JavaScript (script.js)
const socialIcons = document.querySelectorAll('.contact-links img');

// Add hover effect with tooltip
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.title = icon.alt; // Set tooltip text to alt attribute
    });
});
