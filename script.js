let logo = document.querySelector('.logo');
const fishingBoat = document.querySelector('.fishing-boat');
const noFishing = document.querySelector('.no-fishing');

// The logo appears once the the user scrolls down more than 100px
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        logo.classList.add('active');
    }
    // the logo dissapears once the user scrolls back to top of page ( when it's less than 5px )
    else if (window.scrollY < 5) {
        logo.classList.remove('active');
    }
});

// displays the animation when the user is close to the bottom of the page
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
    /*
        adds a margin at the bottom which expands the viewport by 300px,
        which in turn means that the threshold of 0 will trigger the intersectionObserver,
        as soon as any part of it enters that 300px rootMargin
    */
}, {
    rootMargin: '0px 0px 300px 0px',
    threshold: 0
});

// these are the elements which are being observed by intersectionObserver
animationLoading.observe(fishingBoat);
animationLoading.observe(noFishing);