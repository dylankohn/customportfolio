let currentIndex = 0;
const images = ['profdude.jpg', 'slidedude.jpeg'];
let currentSlide = 1;

function changeSlide(direction) {
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');
    
    // Update currentIndex based on direction
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Update slides based on currentSlide
    if (currentSlide === 1) {
        slide2.src = images[currentIndex]; // Set the next image
        slide2.style.opacity = '1'; // Fade in
        slide1.style.opacity = '0'; // Fade out
        currentSlide = 2;
    } else {
        slide1.src = images[currentIndex]; // Set the next image
        slide1.style.opacity = '1'; // Fade in
        slide2.style.opacity = '0'; // Fade out
        currentSlide = 1;
    }

    // Update the dots to reflect the current slide
    updateDots();
}

setInterval(() => {
    changeSlide(1);
}, 10000);

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.style.opacity = index === currentIndex ? '1' : '0.5'; // Highlight the active dot
    });
}

// Call updateDots initially to set the correct opacity
updateDots();

const buttons = document.querySelectorAll('.see-more-btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const paragraph = this.previousElementSibling; // Get the paragraph

        if (this.textContent === 'See More...') {
            paragraph.style.maxHeight = '9em'; // Keep max height as 9em
            paragraph.style.overflowY = 'none'; // Enable vertical scrolling
            paragraph.style.webkitMaskImage = 'none'; // Remove fade
            paragraph.style.maskImage = 'none';       // Remove mask
            this.textContent = 'See Less';            // Change button text

            setTimeout(() => {
                paragraph.style.overflowY = 'auto'; // Show scrollbar after expand
                paragraph.style.maskImage = 'none'; // Optional: remove mask on expand
                paragraph.style.webkitMaskImage = 'none';
            }, 200);
        } else {
            paragraph.style.maxHeight = '6em'; // Collapse height back to 6em
            paragraph.style.overflowY = 'hidden'; // Disable scrolling
            paragraph.style.webkitMaskImage = 'linear-gradient(180deg, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0))'; // Reapply fade
            paragraph.style.maskImage = 'linear-gradient(180deg, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0))'; // Reapply mask
            this.textContent = 'See More...';        // Change button text back
        }
    });
});
