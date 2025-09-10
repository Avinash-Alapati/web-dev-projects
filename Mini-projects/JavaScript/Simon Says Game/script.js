// The Objective of this game is to remember the pattern as far as you can

// Step - 1 ---> On Any Key Press Start The Game --> Level 1

// Step - 2 ---> Level 1 + button flash

// Step - 3 ---> Track GameSeq() & UserSeq & check UserSeq == GameSeq or not

// Step - 4 ---> UserSeq == GameSeq - Level up // If doesnt Match Game Over

// -------------------------------------------------------------------------------

// Start Game

let gameSeq = [];
let userSeq = [];

let btns = ["green","red","yellow","blue"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress" , function () {
    // console.log("Key Pressed");
    if(started == false){
        console.log("Game is Started");
        started = true;

        levelUp();
    }
});

// Flash buttons & Level Up

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },250);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor((Math.random() * 3) + 1);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    // flash on choosing random button
    Flash(randBtn);
}

// Button Event Listners

function btnPress(){
    let btn = this;
    userFlash(btn);
}

let allBtns = document.querySelectorAll('.btn');

for (btn of allBtns){
    btn.addEventListener("click" , btnPress);
}