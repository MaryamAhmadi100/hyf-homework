//Task 1 Item array removal
console.log("Task 1 Item array removal");

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
console.log("Before removing: " + names);
const nameToRemove = "Ahmad";
let removeIndex = 0;

for(i = 0; i <names.length; i++){
    if(names[i] == nameToRemove){
        removeIndex = i;
    }
}

console.log("Removed: " + names[removeIndex]);
names.splice(removeIndex,1);
console.log("After removing: " + names);







//Task 2 When will we be there??
console.log("");
console.log("Task 2 When will we be there??");


const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};
  
function calculateTravelTime(information){
    let hours = information.destinationDistance/information.speed;
    let decimals = (hours + "").split(".")[1];

    decimals=decimals/100;
    hours=hours-decimals;

    let minutes = 6*decimals*10;
    minutes = Math.round(minutes);
    return hours + " hours and " + minutes + " minutes" 
}

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
  






//Task 3 Series duration of my life
console.log("");
console.log("Task 3 Series duration of my life");


const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
];
const averageLifespanDays = 29220;

function percentageOfLifespan(days, hours){
    hours = hours/24;
    total = days+hours;
    let answer = total/averageLifespanDays*100;
    return answer.toFixed(4);
}

console.log(seriesDurations[0].title + " took " + percentageOfLifespan(seriesDurations[0].days,seriesDurations[0].hours) + "% of my life.");
console.log(seriesDurations[1].title + " took " + percentageOfLifespan(seriesDurations[1].days,seriesDurations[1].hours) + "% of my life.");
console.log(seriesDurations[2].title + " took " + percentageOfLifespan(seriesDurations[2].days,seriesDurations[2].hours) + "% of my life.");





//Task 4 Note taking app
console.log("");
console.log("Task 4 Note taking app");


const notes = [];

function saveNote(content, id) {
  notes[id] = content;
  console.log("Adding note: '" + content + "' in id: '" + id + "' ");
}

function getNote(id){
    console.log("Get note " + id + ": " + notes[id]);
}

function logOutNotesFormatted() {
  for(i = 0; i < notes.length; i++){
      console.log("The note with id: " + i + ", has the following note text: " + notes[i]);
  }
}



saveNote("Pick up groceries", 0);
saveNote("Do laundry", 1);

getNote(1);
getNote(0);

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry



