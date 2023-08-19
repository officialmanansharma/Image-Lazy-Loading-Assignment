// Get all elements with the class 'lazyload'
const lazyloadImages = document.querySelectorAll('.lazyload');

// Create an Intersection Observer instance
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Load the image when it enters the viewport
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazyload'); // Remove the lazyload class
            observer.unobserve(img); // Stop observing this image
        }
    });
});

// Start observing each lazyload image
lazyloadImages.forEach(image => {
    observer.observe(image);
});
