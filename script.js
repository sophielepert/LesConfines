
// -------------------------------START JS Header --------------------------

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

// -------------------------------End JS Header --------------------------

// -------------------------------START JS SLIDE --------------------------

const imgs = document.querySelectorAll('.cont-slides img');
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
const cercles = document.querySelectorAll('.cercle');
let index = 0;

suivant.addEventListener('click', slideSuivante);
function slideSuivante(){
    if(index < 2){
        imgs[index].classList.remove('slide-active');
        index++;
        imgs[index].classList.add('slide-active');
    }
    else if (index === 2) {
        imgs[index].classList.remove('slide-active');
        index = 0;
        imgs[index].classList.add('slide-active');
    }
    for(i = 0; i < cercles.length; i++){
        if(cercles[i].getAttribute('data-clic') - 1 === index){
            cercles[i].classList.add('active-cercle');
        } else {
            cercles[i].classList.remove('active-cercle');
        }
    }
}
precedent.addEventListener('click', slidePrecedente);
function slidePrecedente(){
    if(index > 0){
        imgs[index].classList.remove('slide-active');
        index--;
        imgs[index].classList.add('slide-active');
    }
    else if (index === 0) {
        imgs[index].classList.remove('slide-active');
        index = 2;
        imgs[index].classList.add('slide-active');
    }
    for(i = 0; i < cercles.length; i++){
        if(cercles[i].getAttribute('data-clic') - 1 === index){
            cercles[i].classList.add('active-cercle');
        } else {
            cercles[i].classList.remove('active-cercle');
        }
    }
}
document.addEventListener('keydown', keyPressed)
function keyPressed(e){
    if(e.keyCode === 37){
        slidePrecedente();
    } 
    else if (e.keyCode === 39) {
        slideSuivante();
    }
}
// Cercles 
cercles.forEach(cercle => {
    cercle.addEventListener('click', function(){
        for(i = 0; i < cercles.length; i++) {
            cercles[i].classList.remove('active-cercle');
        }
        this.classList.add('active-cercle');
        imgs[index].classList.remove('slide-active');
        index = this.getAttribute('slide-data-clic') - 1;
        imgs[index].classList.add('slide-active');
    }
    )
})
// --------------------------------END JS SLIDE---------------------------------

// --------------------fermer l'onglet menu en cliquant sur la page-------------

