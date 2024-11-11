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

    // Music Player
    const playPauseBtn = document.getElementById("play-pause-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const progressBar = document.getElementById("progress");
    const playlist = document.getElementById("playlist");
    const autoplayToggle = document.querySelector(".autoplay-toggle");
    const shuffleToggle = document.querySelector(".shuffle-toggle");

    let isPlaying = false;
    let currentTrackIndex = 0;
    let isAutoplay = false;
    let isShuffle = false;
    let audio = new Audio();

    const tracks = [
        {
            title: "Sea of Love (cover)",
            artist: "Bradley Duer",
            src: "Music/Sea of Love cover.mp3",
        },
        {
            title: "The Scientist (Coldplay Cover)",
            artist: "Bradley Duer",
            src: "Music/Bradley Duer - The Scientist (Coldplay Cover).mp3",
        },
    ];

    // Update track info
    function updateTrackInfo() {
        const track = tracks[currentTrackIndex];
        document.getElementById("track-title").textContent = track.title;
        document.getElementById("track-artist").textContent = track.artist;
        updatePlaylist();
    }

    // Update playlist UI
    function updatePlaylist() {
        const items = playlist.querySelectorAll("li");
        items.forEach((item, index) => {
            item.classList.toggle("active", index === currentTrackIndex);
        });
    }

    // Play the current track
    function playTrack() {
        audio.src = tracks[currentTrackIndex].src;
        audio.play();
        isPlaying = true;
        playPauseBtn.textContent = "❚❚"; // Pause icon

        audio.ontimeupdate = () => {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = `${progress}%`;
        };

        audio.onended = () => {
            if (isAutoplay) {
                nextBtn.click();
            }
        };
    }

    // Pause the current track
    function pauseTrack() {
        audio.pause();
        isPlaying = false;
        playPauseBtn.textContent = "▶️"; // Play icon
    }

    // Play/Pause button
    playPauseBtn.addEventListener("click", () => {
        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack();
        }
    });

    // Next track
    nextBtn.addEventListener("click", () => {
        if (isShuffle) {
            currentTrackIndex = Math.floor(Math.random() * tracks.length);
        } else {
            currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        }
        playTrack();
        updateTrackInfo();
    });

    // Previous track
    prevBtn.addEventListener("click", () => {
        if (isShuffle) {
            currentTrackIndex = Math.floor(Math.random() * tracks.length);
        } else {
            currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        }
        playTrack();
        updateTrackInfo();
    });

    // Autoplay toggle
    autoplayToggle.addEventListener("click", () => {
        isAutoplay = !isAutoplay;
        autoplayToggle.style.color = isAutoplay ? "#4c6ef5" : "#f0f0f0";
    });

    // Shuffle toggle
    shuffleToggle.addEventListener("click", () => {
        isShuffle = !isShuffle;
        shuffleToggle.style.color = isShuffle ? "#4c6ef5" : "#f0f0f0";
    });

    // Generate playlist UI
    function generatePlaylist() {
        playlist.innerHTML = "";
        tracks.forEach((track, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${track.title} - ${track.artist}`;
            listItem.addEventListener("click", () => {
                currentTrackIndex = index;
                playTrack();
                updateTrackInfo();
            });
            playlist.appendChild(listItem);
        });
        updatePlaylist();
    }

    generatePlaylist();
    updateTrackInfo();

    // Animated typing effect
    const heroTagline = document.getElementById("hero-tagline");
    const tagline = "Your source for unique and inspiring sounds.";
    if (heroTagline) {
        let i = 0;
        heroTagline.textContent = ""; // Clear existing text
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
        }, 5000); // Modal appears 5 seconds after page load

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
