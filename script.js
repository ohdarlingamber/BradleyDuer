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

    // Music Player
    document.addEventListener('DOMContentLoaded', () => {
        const tracks = [
            { title: "The Scientist (Coldplay cover)", src: "Music/Bradley Duer - The Scientist (Coldplay cover).mp3" },
            { title: "Sea of Love (cover)", src: "Music/Sea of Love cover.mp3" },
            { title: "Song 3", src: "Music/song3.mp3" },
        ];
    
        let currentTrackIndex = 0;
        const audio = document.getElementById("audio");
        const playPauseBtn = document.getElementById("play-pause-btn");
        const prevBtn = document.getElementById("prev-btn");
        const nextBtn = document.getElementById("next-btn");
        const trackTitle = document.getElementById("track-title");
        const progress = document.getElementById("progress");
        const playlist = document.getElementById("playlist");
    
        // Load a track
        function loadTrack(index) {
            currentTrackIndex = index;
            audio.src = tracks[index].src;
            trackTitle.textContent = tracks[index].title;
            audio.load();
            highlightCurrentTrack();
        }
    
        // Highlight the current track in the playlist
        function highlightCurrentTrack() {
            const allTracks = document.querySelectorAll("#playlist li");
            allTracks.forEach((track, idx) => {
                track.classList.toggle("active", idx === currentTrackIndex);
            });
        }
    
        // Toggle play/pause
        function togglePlayPause() {
            if (audio.paused) {
                audio.play();
                playPauseBtn.textContent = "⏸️";
            } else {
                audio.pause();
                playPauseBtn.textContent = "▶️";
            }
        }
    
        // Go to the previous track
        function prevTrack() {
            currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
            loadTrack(currentTrackIndex);
            audio.play();
            playPauseBtn.textContent = "⏸️";
        }
    
        // Go to the next track
        function nextTrack() {
            currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
            loadTrack(currentTrackIndex);
            audio.play();
            playPauseBtn.textContent = "⏸️";
        }
    
        // Populate playlist dynamically
        function populatePlaylist() {
            tracks.forEach((track, index) => {
                const li = document.createElement("li");
                li.textContent = track.title;
                li.dataset.index = index;
                li.addEventListener("click", () => {
                    loadTrack(index);
                    audio.play();
                    playPauseBtn.textContent = "⏸️";
                });
                playlist.appendChild(li);
            });
        }
    
        // Update progress bar
        audio.addEventListener("timeupdate", () => {
            const progressPercent = (audio.currentTime / audio.duration) * 100;
            progress.value = progressPercent || 0;
        });
    
        // Seek audio position
        progress.addEventListener("input", () => {
            audio.currentTime = (progress.value / 100) * audio.duration;
        });
    
        // Event listeners
        playPauseBtn.addEventListener("click", togglePlayPause);
        prevBtn.addEventListener("click", prevTrack);
        nextBtn.addEventListener("click", nextTrack);
    
        // Initialize player
        populatePlaylist();
        loadTrack(currentTrackIndex);
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
