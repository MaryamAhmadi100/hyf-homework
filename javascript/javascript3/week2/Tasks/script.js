
//Promise that resolves after set time
function resolveAfterSeconds(resolveAfter){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },resolveAfter*1000)
    })
}

resolveAfterSeconds(3).then(()=>{
    console.log("Resolved");
});

//Fetching and waiting
const APIKEY = "9469946e53df5e8174588db17f99cd64";

const promiseFetch = new Promise((resolve, reject)=>{
    try{
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=copenhagen,denmark&limit=1&appid=${APIKEY}`)
        .then(response =>{
            return response.json();
        })
        .then(responseJSON =>{
            resolve(responseJSON);
        });
    }catch (error){
        reject(error);
    }
});
promiseFetch.then(msg=>{
    console.log("lat: " + msg[0].lat);
});

async function asyncFetch(){
    const data = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=copenhagen,denmark&limit=1&appid=${APIKEY}`);
    const dataJSON = await data.json();
    console.log("lat: " + dataJSON[0].lat);
}
asyncFetch();

