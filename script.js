let logoSmall = document.querySelector('.logo-small');
let logoLarge = document.querySelector('.logo-large');

//hides small logo on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 5) {
        logoSmall.classList.add("active");
    }
    else if (window.scrollY < 5) {
        logoSmall.classList.remove("active");
    }
});

//reveals large logo on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 5) {
        logoLarge.classList.add("active");
    }
    else if (window.scrollY < 5) {
        logoLarge.classList.remove("active");
    }
});