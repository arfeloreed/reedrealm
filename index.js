// carousel functions
var slideIndex = 1;
showSlides(slideIndex)

// // Next/previous controls
// function plusSlides(n) {
// showSlides(slideIndex += n);
// }

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
}