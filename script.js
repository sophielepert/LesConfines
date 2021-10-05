let btn = document.querySelector('button');
let texte = document.querySelector('span');

let cache = true;

texte.style.display = 'none';

btn.addEventListener('click', () => {
    if(cache){
        btn.textContent = "Cacher";
        texte.style.display = "block";
        cache = false;
    }
    else{
        btn.textContent = "Afficher";
        texte.style.display = "none";
        cache = true;
    }
});