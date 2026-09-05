let slideIndex = 1;
let slideTimer;

showSlides(slideIndex);
startSlideshow();

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    resetTimer();
}

// Thumbnail/dot controls
function currentSlide(n) {
    showSlides(slideIndex = n);
    resetTimer();
}

// Show a specific slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Automatically advance slides
function startSlideshow() {
    slideTimer = setInterval(function() {
        slideIndex++;
        showSlides(slideIndex);
    }, 5000); // 5000ms = 5 seconds
}

// Reset the timer when the user interacts
function resetTimer() {
    clearInterval(slideTimer);
    startSlideshow();
}