let logo = document.querySelector('.logo');

// The logo appears once the the user scrolls down more than 100px
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        logo.classList.add("active");
    }
    // the logo dissapears once the user scrolls back to top of page ( when it's less than 5px )
    else if (window.scrollY < 5) {
        logo.classList.remove("active");
    }
});