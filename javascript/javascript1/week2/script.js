// Fullname task 
let name = getFullname("Benjamin", "Hughes", true);
console.log(name);
let name2 = getFullname("Adam", "Smith", false);
console.log(name2);


function getFullname(firstname, surname, useFormalName){
    if (useFormalName== true){
        let fullname = "Lord " + firstname +" "+ surname;
        return fullname;
    }
    if (useFormalName == false){
        let fullname = firstname +" "+ surname;
        return fullname;
    }
}


//Event Application task 
let day = 1;
getEventWeekdag(11);

function getEventWeekdag (number){
    let answer = day + number;
    let weekday;

    while(answer > 7){
        answer = answer-7;
    }

    if(answer == 1){ weekday = "monday"}
    if(answer == 2){ weekday = "thuesday"}
    if(answer == 3){ weekday = "wednesday"}
    if(answer == 4){ weekday = "thursday"}
    if(answer == 5){ weekday = "friday"}
    if(answer == 6){ weekday = "saturday"}
    if(answer == 7){ weekday = "sunday"}

    console.log("Today it's day " + day + " of the week. In " + number + " days it will be " + weekday);
}

//Weather wear task
let degrees = 10;
console.log("Today it's " + degrees + " degrees outside. I should wear " + clothes(degrees));
console.log("");


function clothes(temperature){
    if(temperature < 0){
        return "a Winter Jacket";
    }
    if(temperature >= 0 && temperature <= 15){
        return "a Jacket"
    }
    if(temperature > 15 && temperature <= 30 ){
        return "a T-shirt"
    }
    if(temperature > 30 ){
        return "beach clothes! Go to the beach!"
    }
}

//Student Manager
const class07Students = [];
    //Add some students to the class
addStudentToClass("David");
addStudentToClass("Marie");
addStudentToClass("Jeremy");
addStudentToClass("Thomas");
addStudentToClass("Anna");
addStudentToClass("Kathy");

console.log("Members of class: " + class07Students);

    //Add more students than there is space for
console.log("Adding Fin to the class");
addStudentToClass("Fin");

    //Add a student that is already in the class
console.log("Adding Kathy to the class");
addStudentToClass("Kathy");

    //Add the Queen to a full class
console.log("Adding Queen Margrethe")
addStudentToClass("Queen Margrethe");

    //Call the getNumberOfstudents to log out the number of students.
console.log("There are " + getNumberOfStudents() + " students in the class");

function addStudentToClass(studentName) {
    //Student already in class
    for(i = 0; i<class07Students.length; i++){
        if(class07Students[i] == studentName){
            console.log("Student " + studentName + " is already in the class");
            return;
        }
    }
  //Class full
  if(class07Students.length == 6){
    if(studentName == "Queen Margrethe"){
      console.log("Student " + class07Students[5] + " is being replaced with " + studentName)
      class07Students[5] = studentName;
      
      return;
    }else{
        //Queen Margrethe
      console.log("Cannot add more students to class 07");
      return;
    }
  }

  //No name
  if(studentName == ""){
      console.log("name can not be empty");
      return;
  }

  class07Students.push(studentName);
}

function getNumberOfStudents() {
    let a = class07Students.length;
    return a;
}