
const message = {}
const inputs = document.getElementsByClassName('contactForm-txt')
for (let i = 0; i < inputs.length; i++) {
    console.log(inputs[i]);
    inputs[i].addEventListener('change', (e) => {
        message[e.target.name] = e.target.value
        console.log(message);
    });   
}

const textarea = document.getElementsByClassName('contactForm-textarea')
for (let i = 0; i < textarea.length; i++) {
    console.log(textarea[i]);
    textarea[i].addEventListener('change', (e) => {
        message[e.target.name] = e.target.value
        console.log(message);
    });   
}

document.getElementById("btn-submit").addEventListener("click", function(e) {
    e.preventDefault()
    console.log(Object.entries(message).length);
    if(Object.entries(message).length === 4) {
        return alert('Merci, à bientôt!');
    }
    const inputs = document.getElementsByClassName("contactForm-txt");
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value ) {
            inputs[i].setAttribute("placeholder", "veuillez renseigner tous les champs");
        }
    }
    const form = document.getElementById('submit')
    console.log(form);
})

  
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

