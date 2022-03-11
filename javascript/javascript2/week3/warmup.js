
//warmup assignments:

//Call after 2.5 secounds
setTimeout(function(){
    console.log("Call after 2.5 secounds");

}, 2500);


// Function with two parameters. 
function logString(delay, stringToLog) {
    setTimeout(() => {
        console.log(stringToLog);
    }, delay * 1000)
};
logString(3, "This string logged after 3 seconds.");
logString(5, "This string logged after 5 seconds."); 


//Called after 5 seconds(( jeg faa ingen resultat her))
const btn = document.querySelector("#button");
btn.addEventListener ("click",after5seconds);

function after5seconds(){
    setTimeout(()=> {
        console.log("Called after 5 seconds");
    }, 5000);
};


//function of planets
function earthLogger() { console.log("Earth")};

function saturnLogger() { console.log("Saturn")};

function planetLogFunction (planetLogFunction){
    planetLogFunction();
};

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);



//log location
const logMyLocation = ()=> {

    const status = document.querySelector("#status");


    const success = (position) => {
        console.log(position)
    };

    const error = () =>{
        console.error("error")
    };

  
    navigator.geolocation.getCurrentPosition(success, error);

};
document.querySelector("#location").addEventListener("click", logMyLocation);




//Run after delay
function runAfterDelay(delay, callback){
    setTimeout(()=> {
        callback(delay);
    },delay*1000);
};

runAfterDelay(4,function(){
    console.log("should be logged after 4 seconds");
});



//Joke creator
const shouldTellFunnyJoke = true
function jokeCreator(shouldTellFunnyJoke, funnyJoke, badJoke){
    if (shouldTellFunnyJoke == true){
        funnyJoke();
    }else {
        badJoke();
    }

};
const logFunnyJoke = function(){
    console.log("It is a funny joke.");
};
const logBadJoke = function(){
    console.log("It is a bad joke.");
};
jokeCreator(true, logFunnyJoke, logBadJoke);


