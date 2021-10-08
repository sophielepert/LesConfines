
const message = {}
const inputs = document.getElementsByClassName('contactForm-txt')
for (let i = 0; i < inputs.length; i++) {
    console.log(inputs[i]);
    inputs[i].addEventListener('change', (e) => {
        console.log(inputs[i].style.color);
       
        message[e.target.name] = e.target.value
        console.log(message);
    });
    inputs[i].addEventListener('focus',(e) => {
        if (inputs[i].style.color=== "red"){
            inputs[i].style.color = "black"   
        }
        inputs[i].setAttribute("placeholder", "");


    })

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
            inputs[i].style.color = "red"
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

