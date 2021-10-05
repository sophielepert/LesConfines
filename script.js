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

function randomlinks(){
    var myrandom=Math.round(Math.random()*9)
    var links=new Array()
    links[0]="https://www.instagram.com/la.minute.culture/?hl=fr"
    links[1]="https://www.lesothers.com/"
    links[2]=="https://www.votretourdumonde.com/"
    links[3]="https://www.travel-me-happy.com/"
    links[4]="https://www.madame-oreille.com/"
    links[5]="https://www.window-swap.com/Window"
    links[6]="https://artsandculture.google.com/partner/van-gogh-museum"
    links[7]="https://artsandculture.google.com/partner/the-metropolitan-museum-of-art"
    links[8]="https://artsandculture.google.com/partner/museo-reina-sofia"
    links[9]="http://www.worldwidetelescope.org/webclient/"

    window.location=links[myrandom]
}
