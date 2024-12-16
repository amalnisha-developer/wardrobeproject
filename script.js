// Select the side navbar
var sidenav = document.querySelector(".side-navbar");


// Add an event listener for the close button
var sideclosenav  = document.querySelector('.side-navbar__close i')
sideclosenav.addEventListener('click', function(){
    sidenav.classList.remove('active'); // Remove the active class to hide the navbar


});

// Optional: Open the navbar when clicking the menu button (if you have a toggle button)
var menutoggle  = document.querySelector('.navbar__menu-toggle')

menutoggle.addEventListener('click', function(){
    sidenav.classList.add('active'); // Add the active class to show the navbar
}
);
