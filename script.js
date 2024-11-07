// Smooth scrolling for Navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Back to top button
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

/*
// Create music links on index.html or music.html
// Interactive Music Links
const musicLinks = document.querySelectorAll('#music ul li a');

musicLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#f39c12';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '';
    });
    link.addEventListener('click', (e) => {
        alert(`You clicked on ${link.textContent}!`);
    });
});

*/

// Dynamic year in footer
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
});


// Add more tracks to make sure audio player works
// Audio player - index.html
const audioPlayer = document.getElementById('audio-player');
audioPlayer.addEventListener('play', () => {
    console.log('Music is playing!');
});
audioPlayer.addEventListener('pause', () => {
    console.log('Music is paused.');
});

const trackNameElement = document.getElementById('current-track-name');

// Set initial track name
trackNameElement.textContent = 'Sea of Love (cover)';

// Update track name when audio player is loaded
audioPlayer.addEventListener('loadedmetadata', () => {
    const trackName = audioPlayer.querySelector('source').src.split('/').pop();
    trackNameElement.textContent = trackName;
});

audioPlayer.addEventListener('play', () => {
    console.log('Music is playing!');
});
audioPlayer.addEventListener('pause', () => {
    console.log('Music is paused.');
});

// Animated typing effects
const tagline = "Your source for unique and inspiring sounds."; // Edit tagline 
const heroTagline = document.getElementById('hero-tagline');
let i = 0;

function typeEffect() {
    if (i < tagline.length) {
        heroTagline.textContent += tagline.charAt(i);
        i++;
        setTimeout(typeEffect, 100); // Adjust typing speed here
    }
}

document.addEventListener('DOMContentLoaded', typeEffect);


// Contact Form with Validation
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        formResponse.textContent = 'Thank you for your message!';
        contactForm.reset();
    } else {
        formResponse.textContent = 'Please fill out all fields.';
        formResponse.style.color = 'red';
    }
});
