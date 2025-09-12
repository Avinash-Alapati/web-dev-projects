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
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor((Math.random() * 4));
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq)
    // flash on choosing random button
    gameFlash(randBtn);
}

// Button Event Listners

function checkAns(idx) {
    // console.log("Current Level" , level);

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press Any Key to Start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        resetGame();
    }


}

function btnPress(){
    let btn = this;
    // console.log(btn);
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(`User Entered ${userColor}`);
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');

for (btn of allBtns){
    btn.addEventListener("click" , btnPress)
};

function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
