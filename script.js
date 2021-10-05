// JS pour survival.html

const solo = document.getElementById('solo');
solo.addEventListener('click', function(){
    const soloStory = document.getElementById('solo-story');
    const duoStory = document.getElementById('duo-story');
    const tribeStory = document.getElementById('tribe-story');
    if (soloStory.style.display !== 'block') {
      soloStory.style.display = "block";
      duoStory.style.display ="none";
      tribeStory.style.display ="none";
    }
    else {
      soloStory.style.display = "none";
    }

})

const duo = document.getElementById('duo');
duo.addEventListener('click', function(){
    const soloStory = document.getElementById('solo-story');
    const duoStory = document.getElementById('duo-story');
    const tribeStory = document.getElementById('tribe-story');
    if (duoStory.style.display !=="block") {
        duoStory.style.display = "block";
        tribeStory.style.display ="none";
        soloStory.style.display = "none";
    }
    else {
      duoStory.style.display ="none"
    }
})

const tribe = document.getElementById('tribe');
tribe.addEventListener('click', function(){
  const soloStory = document.getElementById('solo-story');
  const duoStory = document.getElementById('duo-story');
  const tribeStory = document.getElementById('tribe-story');
    if (tribeStory.style.display !== "block" ) {
        tribeStory.style.display = "block";
        duoStory.style.display = "none";
        soloStory.style.display = "none";
      } 
    else {
        tribeStory.style.display = "none";
      }
})

const maskedAmbre = document.getElementById("Ambre");
maskedAmbre.addEventListener('mouseover',function(){
  maskedAmbre.src=('./images/ambre2.jpg');
  maskedAmbre.alt="unmasked Ambre"
})

const maskedArezki = document.getElementById("Arezki");
maskedArezki.addEventListener('mouseover',function(){
  maskedArezki.src=('./images/arezki2.jpg');
  maskedArezki.alt="unmasked Arezki"
})

const maskedBouchra = document.getElementById("Bouchra");
maskedBouchra.addEventListener('mouseover',function(){
  maskedBouchra.src=('./images/bouchra2.jpg');
  maskedBouchra.alt="unmasked Bouchra"
})

maskedPhilippe.addEventListener('mouseover',function(){
  maskedPhilippe.src=('./images/philippe2.jpg');
  maskedPhilippe.alt="unmasked Philippe"
})

maskedSophie.addEventListener('mouseover',function(){
  maskedSophie.src=('./images/sophie2.jpg');
  maskedSophie.alt="unmasked Sophie"
})

maskedYann.addEventListener('mouseover',function(){
  maskedYann.src=('./images/yann2.jpg');
  maskedYann.alt="unmasked Yann"
})