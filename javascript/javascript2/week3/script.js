//Function as variable
var functionsArray = [
    one = function(){
        console.log("one");
    },
    two = function(){
        console.log("two");
    },
    three = function(){
        console.log("three");
    }
]

functionsArray.forEach(f => {
    f();
})


const f1 = function(){
    console.log("function 1");
}

function f2(){
    console.log("function 2");
}

f1();
f2();

const obj = [
    {
        "func": function functionKey(){
            console.log("function key 1");
        }
    },
    {
        "func": function functionKey(){
            console.log("function key 2");
        }
    }
]

obj.forEach(F => {
    F.func();
})


//Fastest presser
const secondsInput = document.getElementById("input");
const secondsSubmit = document.getElementById("buttonStart");
const SText = document.getElementById("S");
const LText = document.getElementById("L");
const winnerText = document.getElementById("infoText");

let gameActive = false;
let LCounter = 0;
let SCounter = 0;

secondsSubmit.addEventListener("click", c =>{
    gameActive = true;
    setTimeout(gameOver, secondsInput.value*1000);
});

function gameOver(){
    gameActive = false;
    if(LCounter<SCounter){
        winnerText.innerHTML = "S Won!";
    }else if(LCounter>SCounter){
        winnerText.innerHTML = "L Won!";
    }else{
        winnerText.innerHTML = "Draw!";
    }
    
}

function resetGame(){
    LCounter = 0;
    SCounter = 0;
}


window.addEventListener('keydown', e =>{
    if(gameActive){
        if(e.key == 'S' || e.key == 's'){
            SCounter++;
            SText.innerHTML = SCounter;
        }
        if(e.key == 'L' || e.key == 'l'){
            LCounter++;
            LText.innerHTML = LCounter;
        }
    }
})