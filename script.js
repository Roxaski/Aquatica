let logo = document.querySelector('.logo');
let turtle = document.getElementById('turtle');

//reveals logo on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        logo.classList.add("active");
    }
    else if (window.scrollY < 5) {
        logo.classList.remove("active");
    }
});

//parallax turtle on scroll
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    turtle.style.top = value * - .5 + 'px';
    turtle.style.left = value * .1 + 'px';
});