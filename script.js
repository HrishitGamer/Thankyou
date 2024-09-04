document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    // Function to show the next slide
    function showNextSlide() {
        slides[currentIndex].classList.remove('active'); // Hide current slide
        currentIndex = (currentIndex + 1) % slides.length; // Update index
        slides[currentIndex].classList.add('active'); // Show next slide
    }

    // Event listener for mouse click
    document.addEventListener('click', showNextSlide);
});
