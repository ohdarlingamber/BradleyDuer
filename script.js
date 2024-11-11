document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Back to top button
    const backToTopButton = document.getElementById("backToTop");
    if (backToTopButton) {
        window.addEventListener("scroll", () => {
            backToTopButton.style.display = window.scrollY > 200 ? "block" : "none";
        });

        backToTopButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Dynamic year in footer
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


   // V1 - Music Player JavaScript

const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress');
const playlist = document.getElementById('playlist');
const autoplayToggle = document.querySelector('.autoplay-toggle');
const shuffleToggle = document.querySelector('.shuffle-toggle');

let isPlaying = false;
let currentTrackIndex = 0;
let isAutoplay = false;
let isShuffle = false;

const tracks = [
    {
        title: 'Sea of Love (cover)',
        artist: 'Bradley Duer',
        src: 'Music/Sea of Love cover.mp3',
    },
    {
        title: 'The Scientist (Coldplay Cover)',
        artist: 'Bradley Duer',
        src: 'Music/Bradley Duer - The Scientist (Coldplay Cover).mp3',
    },
  //{ title: 'Track 3', artist: 'Artist 3' },
 // { title: 'Track 4', artist: 'Artist 4' }
];

// Update track info
function updateTrackInfo() {
  const track = tracks[currentTrackIndex];
  document.getElementById('track-title').textContent = track.title;
  document.getElementById('track-artist').textContent = track.artist;
  updatePlaylist();
}

// Update playlist UI
function updatePlaylist() {
  const items = playlist.querySelectorAll('li');
  items.forEach((item, index) => {
    if (index === currentTrackIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
  isPlaying = !isPlaying;
  if (isPlaying) {
    playPauseBtn.textContent = '❚❚'; // Pause icon
  } else {
    playPauseBtn.textContent = '▶️'; // Play icon
  }
});

// Next/Previous functionality
nextBtn.addEventListener('click', () => {
  if (isShuffle) {
    currentTrackIndex = Math.floor(Math.random() * tracks.length);
  } else {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  }
  updateTrackInfo();
});

prevBtn.addEventListener('click', () => {
  if (isShuffle) {
    currentTrackIndex = Math.floor(Math.random() * tracks.length);
  } else {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  }
  updateTrackInfo();
});

// Autoplay toggle
autoplayToggle.addEventListener('click', () => {
  isAutoplay = !isAutoplay;
  autoplayToggle.style.color = isAutoplay ? '#4c6ef5' : '#f0f0f0';
});

// Shuffle toggle
shuffleToggle.addEventListener('click', () => {
  isShuffle = !isShuffle;
  shuffleToggle.style.color = isShuffle ? '#4c6ef5' : '#f0f0f0';
});

// Create an audio element for the current track
let audio = new Audio(tracks[currentTrackIndex].audioFile);

// Play the current track
function playTrack() {
  audio = new Audio(tracks[currentTrackIndex].audioFile);
  audio.play();

  // Update progress bar while the track is playing
  audio.ontimeupdate = () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
  };

  // Move to next track when the current one finishes
  audio.onended = () => {
    if (isAutoplay) {
      nextBtn.click();
    }
  };
}

// Pause the current track
function pauseTrack() {
  audio.pause();
}
    
// Initialize the player with the first track
    updateTrackInfo();
    


    
    // Animated typing effect
    const heroTagline = document.getElementById("hero-tagline");
    const tagline = "Your source for unique and inspiring sounds.";
    if (heroTagline) {
        let i = 0;
        function typeEffect() {
            if (i < tagline.length) {
                heroTagline.textContent += tagline.charAt(i);
                i++;
                setTimeout(typeEffect, 100); // Adjust typing speed
            }
        }
        typeEffect();
    } 
    
    

    // Modal for announcements
    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".close");
    if (modal && closeModal) {
        setTimeout(() => {
            modal.style.display = "flex";
        }, 5000);  // Modal appears 5 seconds after page load

        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Close modal when clicking outside of the modal-content
        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});
