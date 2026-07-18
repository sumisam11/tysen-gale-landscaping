const featuredImage = document.getElementById("featured-image");

const thumbnails = document.querySelectorAll(".thumbnail");

const previousButton = document.querySelector(".previous");

const nextButton = document.querySelector(".next");

let currentIndex = 0;

function showImage(index) {

    currentIndex = index;

    featuredImage.src = thumbnails[index].src;

    featuredImage.alt = thumbnails[index].alt;

    thumbnails.forEach(thumbnail => {

        thumbnail.classList.remove("active");

    });

    thumbnails[index].classList.add("active");

}

thumbnails.forEach((thumbnail, index) => {

    thumbnail.addEventListener("click", () => {

        showImage(index);

    });

});

nextButton.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= thumbnails.length) {

        currentIndex = 0;

    }

    showImage(currentIndex);

});

previousButton.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = thumbnails.length - 1;

    }

    showImage(currentIndex);

});

/* Automatic slideshow */

let slideshow = setInterval(() => {

    currentIndex++;

    if (currentIndex >= thumbnails.length) {

        currentIndex = 0;

    }

    showImage(currentIndex);

}, 5000);

/* Pause while hovering over gallery */

const gallery = document.querySelector(".gallery-section");

gallery.addEventListener("mouseenter", () => {

    clearInterval(slideshow);

});

gallery.addEventListener("mouseleave", () => {

    slideshow = setInterval(() => {

        currentIndex++;

        if (currentIndex >= thumbnails.length) {

            currentIndex = 0;

        }

        showImage(currentIndex);

    }, 5000);

});

showImage(0);