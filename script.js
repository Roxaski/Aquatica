const displayTitle = document.querySelector('.logo');
const fishingBoat = document.querySelector('.fishing-boat');
const noFishing = document.querySelector('.no-fishing');
const heroSection = document.querySelector('.hero');
let titleVisible = false;

// observes the hero section in order to show / hide the title 
const logoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting && !titleVisible) {
            // when the hero is out of view adds an active class to show title
            displayTitle.classList.add('active');
            titleVisible = true;
        } else if (entry.isIntersecting && titleVisible) {
            // when the hero is back in view removes the active class to hide title
            displayTitle.classList.remove('active');
            titleVisible = false;
        };
    });
}, {
    threshold: .8
});

// observes the hero section
logoObserver.observe(heroSection);

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
    // adds a margin of 300px in order to trigger the animation 300px before the user gets to it
}, {
    rootMargin: '0px 0px 300px 0px',
    threshold: 0
});

// observes the fishing boat elements
animationLoading.observe(fishingBoat);
animationLoading.observe(noFishing);