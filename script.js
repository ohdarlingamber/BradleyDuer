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
    // Dynamic year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Audio player
    const audioPlayer = document.getElementById('audio-player');
    const trackNameElement = document.getElementById('current-track-name');
    const nextButton = document.getElementById('next-button');
    const sources = audioPlayer.querySelectorAll('source');
    let currentTrackIndex = 0;

    // Set initial track name
    trackNameElement.textContent = sources[currentTrackIndex].getAttribute('data-track-name');

    // Function to update the track
    function updateTrack(index) {
        audioPlayer.src = sources[index].src;
        trackNameElement.textContent = sources[index].getAttribute('data-track-name');
        audioPlayer.load();
        audioPlayer.play();
    }

    // Event listener for the "Next" button
    nextButton.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % sources.length;
        updateTrack(currentTrackIndex);
    });

    // Update track name when audio player is loaded
    audioPlayer.addEventListener('loadedmetadata', () => {
        trackNameElement.textContent = audioPlayer.src.split('/').pop().replace('.mp3', '');
    });
});


/*// Add more tracks to make sure audio player works
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
}); */

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

    /*
 // Countdown timer
 const countdownElement = document.getElementById('countdown');
 const targetDate = new Date('December 31, 2024 23:59:59').getTime();

 function updateCountdown() {
     const now = new Date().getTime();
     const distance = targetDate - now;

     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

     countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

     if (distance < 0) {
         clearInterval(countdownInterval);
         countdownElement.textContent = 'EXPIRED';
     }
 }

 const countdownInterval = setInterval(updateCountdown, 1000);
 updateCountdown(); // Initial call to display the countdown immediately
}); */

// Modal for announcements //
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');

// Show modal after 5 seconds
setTimeout(() => {
    modal.style.display = 'flex';
}, 5000);

// Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
