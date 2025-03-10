let logoSmall = document.querySelector('.logo-small');
let logoLarge = document.querySelector('.logo-large');
let turtle = document.getElementById('turtle');

//hides small logo on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
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

//parallax turtle on scroll
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    turtle.style.top = value * -1.15 + 'px';
    turtle.style.left = value * .95 + 'px';
});