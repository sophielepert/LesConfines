// JS pour survival.html

const solo = document.querySelector('button');

solo.addEventListener('click', function(){
    const soloStory = document.getElementById('solo-story');
    if (soloStory.style.display === "none") {
        soloStory.style.display = "block";
      } else {
        soloStory.style.display = "none";
      }
})