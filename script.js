let isLogoDisplaying;
const displayLogo = document.querySelector('.logo');
const fishingBoat = document.querySelector('.fishing-boat');
const noFishing = document.querySelector('.no-fishing');

function logoReveal() {
    // contains the value of how much the window was scrolled
    const scrollY = window.scrollY;

    // displays the logo when scrolling more than 100px, and hides the logo when returning to top of page
    if (scrollY > 100 && !isLogoDisplaying) {
        displayLogo.classList.add('active');
        isLogoDisplaying = true;
    } else if (scrollY < 5 && isLogoDisplaying) {
        displayLogo.classList.remove('active');
        isLogoDisplaying = false;
    };
};

// calls the function on scroll
window.addEventListener('scroll', logoReveal);

// triggers the animation when close to the element
const animationLoading = new IntersectionObserver(elements => {
    elements.forEach(img => {
        // checks if the observed element is being intersected
        if(img.isIntersecting) {
            // the target property gives us the provided elements to trigger the intersectionObserver
            img.target.classList.add('active');
            // once the element is triggered the intersectionObserver stops watching the element as to not reset the animation
            animationLoading.unobserve(img.target);
        };
    });
    // adds margin of 300px in order to trigger the animation 300px before the user gets to it
}, {
    rootMargin: '0px 0px 300px 0px',
    threshold: 0
});

// these elements are being observed by intersectionObserver
animationLoading.observe(fishingBoat);
animationLoading.observe(noFishing);