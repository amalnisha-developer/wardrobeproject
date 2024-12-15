// Select the side navbar
var sidenav = document.querySelector(".side-navbar");

// Show the sidebar
function showNavbar() {
    sidenav.classList.add('active'); // Add the active class to show the navbar
}

// Hide the sidebar
function closeNavbar() {
    sidenav.classList.remove('active'); // Remove the active class to hide the navbar
}

// Add an event listener for the close button
document.querySelector('.side-navbar__close i').addEventListener('click', closeNavbar);

// Optional: Open the navbar when clicking the menu button (if you have a toggle button)
document.querySelector('.navbar__menu-toggle').addEventListener('click', showNavbar);
