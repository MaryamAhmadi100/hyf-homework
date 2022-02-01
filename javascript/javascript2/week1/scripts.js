//Shortest word
console.log("TASK: Shortest Word")
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
shortestWord(danishWords); // returns 'ø'

function shortestWord(list){
    let shortestWord = list[0].length;
    for(i=0;i<list.length;i++){
        if(shortestWord > list[i].length){
            shortestWord = i;
        }
    }
    console.log("Shortest word: " + list[shortestWord]);
}


//Find and count danish letters
console.log("");
console.log("TASK: Danish letters");

const danishString = "Jeg har en blå bil";
danishLetters(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
danishLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}


function danishLetters(str){
    let æNumb = 0;
    let øNumb = 0;
    let åNumb = 0;
    
    for(i=0;i<str.length;i++){
        if(str.charAt(i) == 'æ' || str.charAt(i) == 'Æ'){
            æNumb++;
        }
        if(str.charAt(i) == 'ø' || str.charAt(i) == 'Ø'){
            øNumb++;
        }
        if(str.charAt(i) == 'å' || str.charAt(i) == 'Å'){
            åNumb++;
        }
    }

    console.log("Total: " + (æNumb+øNumb+åNumb) + " " + "[æ = " + æNumb +"] [ø = "+ øNumb + "] [å = " + åNumb + "]");
}

//Spirit animal name generator
const formName = document.getElementById("name");
const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener('submit', (event) =>{
    let spiritAnimals = ["The Crying Butterfly", "The Fullmoon Wolf", "The Powerfull Bear", "The Bee of Wisdom", "The Curious Cat", "The Magical Crow", "The Strong Dragon", "The Confident Elephant", "The Fearless Falcon", "The Alert Hawk"]
    let chosenSpirit = spiritAnimals[Math.floor(Math.random()*10)];
    result.innerText = formName.value + "- " + chosenSpirit;
    event.preventDefault();
})
