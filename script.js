// JS pour survival.html

const solo = document.getElementById('solo');
solo.addEventListener('click', function(){
    const soloStory = document.getElementById('solo-story');
    const duoStory = document.getElementById('duo-story');
    const tribeStory = document.getElementById('tribe-story');
    if (soloStory.style.display === "none") {
        soloStory.style.display = "block";
        duoStory.style.display ="none";
        tribeStory.style.display ="none";
      } else {
        soloStory.style.display = "none";
      }
})
const duo = document.getElementById('duo');
duo.addEventListener('click', function(){
    const soloStory = document.getElementById('solo-story');
    const duoStory = document.getElementById('duo-story');
    const tribeStory = document.getElementById('tribe-story');
    if (duoStory.style.display === "none") {
        duoStory.style.display = "block";
        tribeStory.style.display ="none";
        soloStory.style.display = "none";
      } else {
        duoStory.style.display = "none";
      }
})

const tribe = document.getElementById('tribe');
tribe.addEventListener('click', function(){
    const soloStory = document.getElementById('solo-story');
    const duoStory = document.getElementById('duo-story');
    const tribeStory = document.getElementById('tribe-story');
    if (tribeStory.style.display === "none") {
        tribeStory.style.display = "block";
        duoStory.style.display = "none";
        soloStory.style.display = "none";
      } else {
        tribeStory.style.display = "none";
      }
})