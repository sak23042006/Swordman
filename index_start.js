

document.addEventListener("DOMContentLoaded",()=>{
    var indexAudio = new Audio("./audio/index audio.opus")
    indexAudio.play()
    indexAudio.currentTime=19
})


var startButton = document.querySelector(".start-button")
startButton.addEventListener("click",()=>{
    location.href = "./play page/play.html"
})
var aboutButton = document.querySelector(".about-game-button")

aboutButton.addEventListener("click",()=>{
    location.href = "./about page/about.html"
})