'use strict';/*
document.querySelector(".message").textContent = "Correct Number!! YaY"

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

console.log(document.querySelector(".guess").value);

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);

*/
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function() {
    let guess = Number(document.querySelector(".guess").value);
    console.log(typeof guess);

    if(!guess) {
        document.querySelector(".message").textContent= 'No number ⚠️'
    } else if(guess === secretNumber) {
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width="30rem",
        document.querySelector(".message").textContent = "Correct Number";
        score++;
        if(score> highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
        document.querySelector(".score").textContent = score;
        secretNumber = Math.trunc(Math.random()*20)+1;
        
    } else if(guess > secretNumber) {
        document.querySelector(".message").textContent = "Too High";
        score--;
        document.querySelector(".score").textContent = score
    } else if(guess < secretNumber) {
        document.querySelector(".message").textContent = "Too Low";
        score--;
        document.querySelector(".score").textContent = score
    }
})


document.querySelector(".again").addEventListener("click", function() {
    secretNumber = Math.trunc(Math.random()*20)+1;
    score = 20;
    document.querySelector(".score").textContent = score
    document.querySelector(".guess").value = "0";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width="15rem";
    document.querySelector(".message").textContent = "Start Guessing";
}
)

