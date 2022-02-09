//Filter and map
let numbers = [1, 2, 3, 4];
let filteredNumbers = numbers.filter(n => n % 2 !== 0);
let newNumbers = filteredNumbers.map(n => n*2);

console.log("The doubled numbers are", newNumbers); // [2, 6]

//Movies
let shortMovieTitles = movies.filter(m => m.title.length < 6);
console.log("Short movies titles:");
console.log(shortMovieTitles);

let longMovieTitles = movies.filter(m => m.title.length > 25);
console.log("Long movies titles:");
console.log(longMovieTitles);
 
let eightyMovies = movies.filter(m => m.year >= 1980 && m.year <= 1989).length;
console.log("Number of movies between 1980-1989: " + eightyMovies);

let tagMovies = movies.map(m => {
    if(m.rating >= 7){
        m.tag = "Good";
    }
    if(m.rating >= 4 && m.rating < 7){
        m.tag = "Average";
    }
    if(m.rating < 4){
        m.tag = "Bad";
    }
});

let counter = 0;
let surferAlienBenjamin = movies.map(m => {
    let lowerC = m.title.toLowerCase();
    if(lowerC.includes("alien") ||lowerC.includes("benjamin")||lowerC.includes("surfer") ){
        counter++;
    }
});
console.log("There are " + counter + " number of movies with Alien, Benjamin or Surfer in the name");

console.log("Duplicated words:");
let duplicated = movies.filter(m =>{
    let lowerC = m.title.toLowerCase();
    let split = lowerC.split(" ");
    let countingWord = 0;
    split.forEach(t =>{
        if(t.includes("the")){
            countingWord++;
        }        
    })
    if(countingWord > 1){
        return true;
    }else{
        return false;
    }
})
console.log(duplicated);

console.log("Total number of good bad and average: ");
let tagRatings = [0,0,0]
let goodAverageBadMovies = movies.map(m =>{
    if(m.tag == "Good"){
        tagRatings[0]++;
    }
    if(m.tag == "Average"){
        tagRatings[1]++;
    }
    if(m.tag == "Bad"){
        tagRatings[2]++;
    }
})
console.log("Good: " + tagRatings[0] + " Average: " + tagRatings[1] + " Bad: " + tagRatings[2]);
