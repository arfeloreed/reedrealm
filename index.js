// hamburger animation
const hamburger = document.getElementById("hamburger");
var bar1 = document.querySelector(".bar1");
var bar2 = document.querySelector(".bar2");
var bar3 = document.querySelector(".bar3");
var mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener ("click", () => {
    bar1.classList.toggle("animatebar1");
    bar2.classList.toggle("animatebar2");
    bar3.classList.toggle("animatebar3");
    mobileNav.classList.toggle("open-mobile-nav");
})


// carousel functions
var slideIndex = 1;
showSlides(slideIndex)

// // Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i ++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
}