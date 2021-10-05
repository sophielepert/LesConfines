
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

  