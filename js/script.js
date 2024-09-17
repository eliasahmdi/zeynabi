// script.js
console.log('Website is ready');
// gallery.js - for column gallery

let currentSlideColumnIndex = 0;
const slidesColumn = document.querySelectorAll('.gallery-slide-column');

function showSlideColumn(n) {
    slidesColumn.forEach(slide => slide.classList.remove('active'));
    slidesColumn[n].classList.add('active');
}

function moveSlideColumn(n) {
    currentSlideColumnIndex += n;

    if (currentSlideColumnIndex >= slidesColumn.length) {
        currentSlideColumnIndex = 0;
    } else if (currentSlideColumnIndex < 0) {
        currentSlideColumnIndex = slidesColumn.length - 1;
    }

    showSlideColumn(currentSlideColumnIndex);
}

// Initialize the first slide as active
showSlideColumn(currentSlideColumnIndex);

