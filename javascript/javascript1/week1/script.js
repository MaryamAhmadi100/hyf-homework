//age-ify task
let yearOfBirth = 1982;
let yearFuture = 2025;
age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture);

//dog year task
let dogYearOfBirth = 2000;
let dogYearFuture = 2030;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = false;

if(shouldShowResultInDogYears == false){
    console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture )
}


//house price task
let volumeInMeters = 8 * 10 * 10;
let gadenSizeInM2 = 100 ;
let housePrice = volumeInMeters * 2.5 * 1000 + gadenSizeInM2 * 300;
console.log ("The house price should be " + housePrice + ". If Peter is paying 2.500.000, then he would be paying too much")



//startup name task
let firstWords = ["Easy", "Coroprate", "Awesome", "Super", "Helpful", "New"];
let secondWords = ["Company", "Succesfull", "Bright", "See", "Doings", "Service"];


const randomNumber1 = Math.floor(Math.random() * 6);
const randomNumber2 = Math.floor(Math.random() * 6);

let word1 = firstWords[randomNumber1];
let word2 = secondWords[randomNumber2];

let startupName = word1 + word2; 
console.log(startupName);