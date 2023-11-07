var startExitAbout = document.querySelector("#left-arrow-about")

startExitAbout.addEventListener("click",()=>{
    location.href = "./index.html"
})

var aboutAudio = new Audio("./audio/about audio.mp3")
document.addEventListener("DOMContentLoaded",()=>{
    aboutAudio.play()
    aboutAudio.loop=true
})