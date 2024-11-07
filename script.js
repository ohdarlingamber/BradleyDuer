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


