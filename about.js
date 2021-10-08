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



const photoMaskedAmbre = document.getElementById("Ambre");
photoMaskedAmbre.addEventListener('mouseover',function(){
    photoMaskedAmbre.src=('./images/teampictures/ambre2.jpg');
    photoMaskedAmbre.alt="unmasked Ambre"
})
photoMaskedAmbre.addEventListener('mouseleave',function(){
  photoMaskedAmbre.src=('./images/teampictures/ambre1.jpg');
  photoMaskedAmbre.alt="masked Ambre"
})

const photoMaskedArezki = document.getElementById("Arezki");
photoMaskedArezki.addEventListener('mouseover',function(){
  photoMaskedArezki.src=('./images/teampictures/arezki2.jpg');
  photoMaskedArezki.alt="unmasked Arezki"
})
photoMaskedArezki.addEventListener('mouseleave',function(){
  photoMaskedArezki.src=('./images/teampictures/arezki1.jpg');
  photoMaskedArezki.alt="masked Arezki"
})

const photoMaskedBouchra = document.getElementById("Bouchra");
photoMaskedBouchra.addEventListener('mouseover',function(){
  photoMaskedBouchra.src=('./images/teampictures/bouchra2.jpg');
  photoMaskedBouchra.alt="unmasked Bouchra"
})
photoMaskedBouchra.addEventListener('mouseleave',function(){
  photoMaskedBouchra.src=('./images/teampictures/bouchra1.jpg');
  photoMaskedBouchra.alt="masked Bouchra"
})

const photoMaskedPhilippe = document.getElementById("Philippe");
photoMaskedPhilippe.addEventListener('mouseover',function(){
  photoMaskedPhilippe.src=('./images/teampictures/philippe2.jpg');
  photoMaskedPhilippe.alt="unmasked Philippe"
})
photoMaskedPhilippe.addEventListener('mouseleave',function(){
  photoMaskedPhilippe.src=('./images/teampictures/philippe1.jpg');
  photoMaskedPhilippe.alt="masked Philippe"
})


const photoMaskedSophie = document.getElementById("Sophie");
photoMaskedSophie.addEventListener('mouseover',function(){
  photoMaskedSophie.src=('./images/teampictures/sophie2.jpg');
  photoMaskedSophie.alt="unmasked Sophie"
})
photoMaskedSophie.addEventListener('mouseleave',function(){
  photoMaskedSophie.src=('./images/teampictures/sophie1.jpg');
  photoMaskedSophie.alt="masked Sophie"
})

const photoMaskedYann = document.getElementById("Yann");
photoMaskedYann.addEventListener('mouseover',function(){
  photoMaskedYann.src=('./images/teampictures/yann2.jpg');
  photoMaskedYann.alt="unmasked Yann"
})
photoMaskedYann.addEventListener('mouseleave',function(){
  photoMaskedYann.src=('./images/teampictures/yann1.jpg');
  photoMaskedYann.alt="masked Yann"
})


