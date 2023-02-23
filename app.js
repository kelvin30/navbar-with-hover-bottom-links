
/* Function for the side navbar*/
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

/* JavaScript function for the navbar when scrolled down*/
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function(){
  let value = window.scrollY;
  navbar.style.top = 25 + value * -.3 + '%';
})

//Scroll up the page when reloading
window.onbeforeunload = function () {
  window.scrollTo(0, 0); 
}