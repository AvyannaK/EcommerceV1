//Carousel Slideshow


// var responsiveSlider = function() {
//     var slider = document.getElementById(“slider”);
//     var slideList = document.getElementById(“slideWrap”);
//     var prev = document.getElementById(“prev”);
//     var next = document.getElementById(“next”);
//     var count = 1;
//     var sliderWidth = slider.offsetWidth;
//     var items = slideList.querySelectorAll(“li”).length;
//     window.addEventListener(‘resize’, function() {
//       sliderWidth = slider.offsetWidth;
//     });
//     var nextSlide = function() {
//       if(count < items) {
//         slideList.style.left = “-” + count * sliderWidth + “px”;
//         count++;
//       }
//       else if(count = items) {
//         slideList.style.left = “0px”;
//         count = 1;
//       }
//     };
//     var prevSlide = function() {
//       if(count > 1) {
//         count = count – 2;
//         slideList.style.left = “-” + count * sliderWidth + “px”;
//         count++;
//       }
//       else if(count = 1) {
//         count = items – 1;
//         slideList.style.left = “-” + count * sliderWidth + “px”;
//         count++;
//       }
//     };
//     next.addEventListener(“click”, function() {
//       nextSlide();
//     });
//     prev.addEventListener(“click”, function() {
//       prevSlide();
//     });
//     setInterval(function() {
//       nextSlide()
//     }, 5000);
//     };
//     window.onload = function() {
//     responsiveSlider();
//     }
 
// First grab access to html elements we will be using
const previous = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".slide");
 
// Set an index for slides
let slideIndex = 1;
showSlides(slideIndex);
 
// Create onclick function to slide through photos
previous.addEventListener("click", () => {
  nextSlide(-1);
});
 
// For both previous and next slides
next.addEventListener("click", () => {
  nextSlide(1);
});
 
// For each dot, set it equal to the index
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide(index + 1);
  });
});
 
// Create function to move through the index
function nextSlide(n) {
  showSlides((slideIndex += n));
}
 
function currentSlide(n) {
  showSlides((slideIndex = n));
}
 
// Use if else statement to move through to the next slide
function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  } else {
    slideIndex = n;
  }
 
  // Set display to none, when this slide is passed
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
 
  // Set dot to remove the active class so image will not be displayed
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
 
  // Set display to active, when this slide is up
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}
 