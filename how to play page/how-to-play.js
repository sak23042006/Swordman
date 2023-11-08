alert("use earphones for better quality")

var howToPlay = new Audio("../audio/how to play.mp3")
document.addEventListener("DOMContentLoaded",()=>{
    howToPlay.play()
})

var startExitHow = document.querySelector("#left-arrow-how")
console.log(startExitHow);
startExitHow.addEventListener("click",()=>{
    location.href = "../play page/play.html"
})