// variables for game page 
var player1Name = document.getElementById("player1name");

//dom of player name
player1Name.innerHTML = localStorage.getItem("player-name")

var villainImage = document.getElementById("villain-img");
var heroImage = document.getElementById("hero-img");


var soldier = document.querySelectorAll(".soldiers")

const numSwords = document.querySelector('.num-of-swords');

var gameAudio = new Audio("./audio/game audio.mp3")
gameAudio.play()


let heroSword = 1;
let villainSword = 100;

villainImage.addEventListener("click",()=>{
    if (heroSword < villainSword){
        localStorage.setItem("win-lose","lose")
        location.href = "./result.html"
    }
})

for (let i = 0; i < soldier.length; i++) {
    var random = Math.ceil((Math.random() * 11));
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
            soldier[i].removeChild(soldier[i].getElementsByTagName("img")[0]);
            soldier[i].removeChild(soldier[i].getElementsByTagName("span")[0]);
            const villainImg = document.createElement("img");
            villainImg.src = "./img/hero.png"; // Replace with your actual villain image path
            soldier[i].appendChild(villainImg);
        } 
        else {
            // Hero loses, replace soldier image with villain image
            localStorage.setItem("win-lose","lose")
            location.href = "./result.html"
            var resultAudio = new Audio("./audio/game-audio.mp3")
            
        }

        // Update the sword count and other game logic as needed
        updateSwordCount();

    });
}

function updateSwordCount() {
    numSwords.textContent = heroSword;
    villainImage.addEventListener("click",()=>{
    if (heroSword > villainSword){
        location.href = "./result.html"  
    }
})
}

var mode = localStorage.getItem("mode")
const timerDisplay = document.querySelector(".alarm");



switch (mode) {
    case "medium":
        timeInSeconds = 15
        break
    case "hard":
        timeInSeconds = 10
        break
    default:
        timeInSeconds = 19
        break
 }

 timerDisplay.innerHTML=15;

function countdown() {

    timerDisplay.textContent = timeInSeconds;
    timeInSeconds--;

    if (timeInSeconds==0) {
        localStorage.setItem("win-lose","lose")
        location.href = "./result.html"; 
    }
    else if(timeInSeconds < 0) {
        clearInterval(timerInterval);
    }
    }

const timerInterval = setInterval(countdown, 1000);