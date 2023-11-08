var resultText = document.querySelector(".win-or-lose-text")

var nepoleonMessage = document.getElementById("nepoleon-message")

function lost() {
    if (localStorage.getItem("win-lose")=="lose"){
        resultText.innerHTML = "SKILL ISSUES"
        nepoleonMessage.style.display="block"
        var loseAudio = new Audio("../audio/lose audio.mp3")
        loseAudio.play()
        loseAudio.currentTime=1
    }
    else{
        var winAudio = new Audio("../audio/win audio.mp3")
        winAudio.play()
        winAudio.currentTime=1
    }
}
lost()

var playAgainButton = document.querySelector(".play-again-button")

playAgainButton.onclick = () =>{
    location.href = "../play page/play.html"
    localStorage.clear()
}
 var quitButton = document.querySelector(".quit-button")

quitButton.onclick = () =>{
    location.href = '../index.html';
}