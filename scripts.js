
//for registration
function toggleModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = (modal.style.display === "block" ? "none" : "block");
}

document.getElementById('registration').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    localStorage.setItem('username', username); // Simulated authentication
    alert('Registration Successful!');
    toggleModal('registerForm');
});

function searchMovies() {
    var input = document.getElementById('searchInput').value;
    alert('Search for ' + input); // Placeholder for actual search logic
}

// Additional scripts for loading movie data, handling reviews, etc.


//for social icon
document.getElementById('share-facebook').addEventListener('click', function(event) {
    event.preventDefault();
    const shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href);
    window.open(shareUrl, '_blank');
});

document.getElementById('share-twitter').addEventListener('click', function(event) {
    event.preventDefault();
    const text = "Check out this awesome movie!";
    const shareUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href) + '&text=' + encodeURIComponent(text);
    window.open(shareUrl, '_blank');
});

function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    openSocialShareWindow(shareUrl);
}

function shareOnTwitter() {
    const text = "Check out this awesome movie!";
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    openSocialShareWindow(shareUrl);
}

function openSocialShareWindow(url) {
    window.open(url, 'Share', 'width=600,height=400');
}


//for cta

document.getElementById('ctaButton').addEventListener('click', function() {
    alert('Thank you for your interest! Please check your email to confirm your subscription.');
    // Alternatively, redirect to a signup page or execute other logic
    // window.location.href = 'signup-page.html';
});


//for featured movies

document.addEventListener('DOMContentLoaded', function() {
    const movies = [
        { title: "Inception", image: "https://example.com/inception.jpg" },
        { title: "Interstellar", image: "https://example.com/interstellar.jpg" },
        { title: "The Dark Knight", image: "https://example.com/darkknight.jpg" }
    ];

    const moviesContainer = document.getElementById('moviesContainer');
    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        moviesContainer.appendChild(movieItem);
    });
});
