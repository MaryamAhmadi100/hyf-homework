//Weather API call
const APIKEY = "9469946e53df5e8174588db17f99cd64";
const limit = 3;

const country = document.getElementById('search-country');
const cityName = document.getElementById('search-city');
const button = document.getElementById('button');

const resultUl = document.getElementById('result-ul');

button.addEventListener('click', (res)=>{
    res.preventDefault();
    let weatherCall = new Promise((resolve,reject) =>{
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName.value},${country.value}&limit=${limit}&appid=${APIKEY}`)
        .then(LatLonResponse => {
            return LatLonResponse.json();
        })
        .then(LatLonJSON =>{
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${LatLonJSON[0].lat}&lon=${LatLonJSON[0].lon}&appid=${APIKEY}`)
                .then(latlon =>{
                    resolve(latlon.json());
                }).catch(error =>{
                    reject(error);
            })
        }).catch(error => {
            reject(error);
        });
    })

    weatherCall.then((message) =>{
        console.log(message);
        resultUl.children[0].innerHTML += country.value;
        resultUl.children[1].innerHTML += cityName.value;
        resultUl.children[2].innerHTML += message.main.temp.toFixed(2);
        resultUl.children[3].innerHTML += message.wind.speed;
        resultUl.children[4].innerHTML += message.weather[0].description;
        resultUl.children[5].innerHTML += message.sys.sunrise;
        resultUl.children[6].innerHTML += message.sys.sunset;
        resultUl.children[7].children[0].src = `https://openweathermap.org/img/wn/${message.weather[0].icon}@2x.png`;
    }).catch((message)=>{
        console.log((message));
        return;
    })
});
