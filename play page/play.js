var startGameButton = document.querySelector(".start-game")
var playerName = document.querySelector(".player-name")
var modeOpt = document.querySelector(".options")

var playAudio = new Audio("../audio/play audio.mp3")
document.addEventListener("DOMContentLoaded",()=>{
    playAudio.play()
    playAudio.currentTime=21.5
})




startGameButton.addEventListener("click",()=>{
    
    if (playerName.value.trim().length != "") {
        localStorage.clear()
        localStorage.setItem("player-name",playerName.value)
        localStorage.setItem("mode",modeOpt.value)
        location.href = "../game page/game.html"
    }
    else{
        alert("Fill The Name Field")
    }
})
var startExit = document.getElementById("left-arrow-play")
 startExit.addEventListener("click",()=>{
    location.href = "../index.html"
 })

var howToPlay = document.querySelector(".how-to-play")
howToPlay.addEventListener("click",()=>{
    
    location.href = "../how to play page/how-to-play.html"
})