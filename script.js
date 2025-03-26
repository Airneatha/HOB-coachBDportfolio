document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active'); // Toggle the 'active' class on the nav element
        hamburger.classList.toggle('active'); // toggle the active class on the hamburger so you can change the look of it if wanted.
    });

    // Optional: Close the menu when a nav link is clicked (useful for single-page apps)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});