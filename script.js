const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", menuDeroulant);
function menuDeroulant() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
navLink.forEach(n => n.addEventListener("click", menuFerme));
function menuFerme(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
