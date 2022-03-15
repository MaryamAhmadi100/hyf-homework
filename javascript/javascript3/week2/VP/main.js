
const red = document.querySelectorAll("li")[0];
const blue = document.querySelectorAll("li")[1];
const green = document.querySelectorAll("li")[2];


const redStart = {x: red.getBoundingClientRect().left, y: red.getBoundingClientRect().top}
const blueStart = {x: blue.getBoundingClientRect().left, y: blue.getBoundingClientRect().top}
const greenStart = {x: green.getBoundingClientRect().left, y: green.getBoundingClientRect().top}

function translateOneByOne(){
    moveElement(red, { x: 20-redStart.x, y: 300-redStart.y}).then(() => {
        console.log("Element one been moved");
    }).then(()=>{
        moveElement(blue,{ x: 400-blueStart.x, y: 300-blueStart.y }).then(()=>{
            console.log("Element two has been moved");
        }).then(()=>{
            moveElement(green, { x: 400-greenStart.x, y: 20-greenStart.y }).then(()=>{
                console.log("Element three has been moved");
            })
        })
    })
}

function translateAllAtOnce(){
    Promise.all([
        moveElement(red, { x: 20-redStart.x, y: 300-redStart.y}),
        moveElement(blue,{ x: 400-blueStart.x, y: 300-blueStart.y }),
        moveElement(green, { x: 400-greenStart.x, y: 20-greenStart.y })
    ]).then(()=>{
        console.log("All elements moved at once");
    })
}


//translateOneByOne();
translateAllAtOnce();
