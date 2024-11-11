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
    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("play-pause-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const trackTitle = document.getElementById("track-title");
    const progress = document.getElementById("progress");
    const playlist = document.getElementById("playlist");

    if (audio && playPauseBtn && prevBtn && nextBtn && trackTitle && progress && playlist) {
        const tracks = [
            { title: "The Scientist (Coldplay Cover)", src: "Music/Bradley Duer - The Scientist.mp3" },
            { title: "Sea of Love (Cover)", src: "Music/Sea of Love.mp3" },
            
        ];

        let currentTrackIndex = 0;

        function loadTrack(index) {
            if (tracks[index]) {
                currentTrackIndex = index;
                audio.src = tracks[index].src;
                trackTitle.textContent = tracks[index].title;
                audio.load();
                highlightCurrentTrack();
            }
        }

        function highlightCurrentTrack() {
            const allTracks = playlist.querySelectorAll("li");
            allTracks.forEach((track, idx) => {
                track.classList.toggle("active", idx === currentTrackIndex);
            });
        }

        function togglePlayPause() {
            if (audio.paused) {
                audio.play();
                playPauseBtn.textContent = "⏸️";
            } else {
                audio.pause();
                playPauseBtn.textContent = "▶️";
            }
        }

        function prevTrack() {
            currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
            loadTrack(currentTrackIndex);
            audio.play();
        }

        function nextTrack() {
            currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
            loadTrack(currentTrackIndex);
            audio.play();
        }

        function populatePlaylist() {
            playlist.innerHTML = ""; // Clear any existing items
            tracks.forEach((track, index) => {
                const li = document.createElement("li");
                li.textContent = track.title;
                li.dataset.index = index;
                li.addEventListener("click", () => {
                    loadTrack(index);
                    audio.play();
                });
                playlist.appendChild(li);
            });
        }

        audio.addEventListener("timeupdate", () => {
            if (audio.duration) {
                const progressPercent = (audio.currentTime / audio.duration) * 100;
                progress.value = progressPercent;
            }
        });

        progress.addEventListener("input", (e) => {
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;
        });

        playPauseBtn.addEventListener("click", togglePlayPause);
        prevBtn.addEventListener("click", prevTrack);
        nextBtn.addEventListener("click", nextTrack);

        audio.addEventListener("ended", nextTrack);

        // Load the first track
        loadTrack(currentTrackIndex);
        populatePlaylist();
    }
});
