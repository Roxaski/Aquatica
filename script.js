let logo = document.querySelector('.logo');

//reveal logo on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        logo.classList.add("active");
    }
    else if (window.scrollY < 5) {
        logo.classList.remove("active");
    }
});