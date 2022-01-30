//age-ify task
const yearOfBirth = 1982;
const yearFuture = 2025;
age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture);

//dog year task
const dogYearOfBirth = 2000;
const dogYearFuture = 2030;
const dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = false;

if(shouldShowResultInDogYears == false){
    console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture )
}


//house price task
const volumeInMeters = 8 * 10 * 10;
const gadenSizeInM2 = 100 ;
let housePrice = volumeInMeters * 2.5 * 1000 + gadenSizeInM2 * 300;
console.log ("The house price should be " + housePrice + ". If Peter is paying 2.500.000, then he would be paying too much")



//startup name task
const  firstWords = ["Easy", "Coroprate", "Awesome", "Super", "Helpful", "New"];
const secondWords = ["Company", "Succesfull", "Bright", "See", "Doings", "Service"];


const randomNumber1 = Math.floor(Math.random() * 6);
const randomNumber2 = Math.floor(Math.random() * 6);

const word1 = firstWords[randomNumber1];
const word2 = secondWords[randomNumber2];

let startupName = word1 + word2;
console.log(startupName);