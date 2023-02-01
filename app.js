
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


// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("navbar").style.fontSize = "30px";
//   } else {
//     document.getElementById("navbar").style.fontSize = "220px";
//   }
// }

/* JavaScript function for the navbar when scrolled down*/
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function(){
  let value = window.scrollY;

  navbar.style.top = 30 + value * -.1 + '%';
})