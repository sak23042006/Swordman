// variables for game page 
var player1Name = document.getElementById("player1name");

var villainImage = document.getElementById("villain-img");
var heroImage = document.getElementById("hero-img");


var soldier = document.querySelectorAll(".soldiers")

const numSwords = document.querySelector('.num-of-swords');

var gameAudio = new Audio("../audio/game audio.mp3")

//dom of player name
player1Name.innerHTML = localStorage.getItem("player-name")


document.addEventListener("DOMContentLoaded",()=>{
    gameAudio.play()
})

let heroSword = 2;
let villainSword = 1000;

villainImage.addEventListener("click",()=>{
    if (heroSword < villainSword){
        localStorage.setItem("win-lose","lose")
        location.href = "../result page/result.html"
    }
})

for (let i = 0; i < soldier.length; i++) {



    if(i%2 ==0){
        var random = Math.ceil((Math.random() * 5));
    }
    if(i%2!==0){
        var random = Math.ceil((Math.random() * 50));
    }
    if(i>15){
        var random = Math.ceil((Math.random() * 500));
    }
    
    var span = document.createElement("span");
    span.innerText = random;
    span.setAttribute("id", "swordnum");
    soldier[i].appendChild(span);
    var soldierId = soldier[i].id;
    const x = document.getElementById(soldierId);
    const y = x.getElementsByTagName("span");
    

    soldier[i].addEventListener('click', function () {
        const soldierSwords = parseInt(y[0].innerText);
        
        if (heroSword >= soldierSwords) {
            // Hero wins, you can add your logic here if needed
            heroSword += soldierSwords;
            // Remove the soldier image
            var swordAudio = new Audio("../audio/sword audio.mp3")

            swordAudio.play()
            // removing soldier img and num of swords 
            soldier[i].removeChild(soldier[i].getElementsByTagName("img")[0]);
            soldier[i].removeChild(soldier[i].getElementsByTagName("span")[0]);

            // creating an image tag 
            const villainImg = document.createElement("img");
            villainImg.src = "../img/hero.png"; 
            // Replace with your actual villain image path
            soldier[i].appendChild(villainImg);
        } 
        else {
            // Hero loses, replace soldier image with villain image
            localStorage.setItem("win-lose","lose")
            location.href = "../result page/result.html"
            var resultAudio = new Audio("../audio/lose audio.mp3")
            
        }

        // Update the sword count and other game logic as needed
        updateSwordCount();

    });
}

function updateSwordCount() {
    numSwords.textContent = heroSword;
    villainImage.addEventListener("click",()=>{
    if (heroSword > villainSword){
        location.href = "../result page/result.html"  
    }
})
}

var mode = localStorage.getItem("mode")
const timerDisplay = document.querySelector(".alarm");

// choosing time based on mode 
switch (mode) {
    case "medium":
        timeInSeconds = 20
        break
    case "hard":
        timeInSeconds = 15
        break
    default:
        timeInSeconds = 25
        break
 }


 timerDisplay.innerHTML=timeInSeconds;

function countdown() {

    // timer dom 
    timerDisplay.textContent = timeInSeconds;
    timeInSeconds--;

    if (timeInSeconds==0) {
        localStorage.setItem("win-lose","lose")
        location.href = "../result page/result.html"; 
    }
    else if(timeInSeconds < 0) {
        clearInterval(timerInterval);
    }
    }

const timerInterval = setInterval(countdown, 1000);