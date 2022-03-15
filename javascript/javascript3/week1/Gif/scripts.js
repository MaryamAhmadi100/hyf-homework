const APIKEY = "HE28dRYots7IvgGuuRC1NR8AEYbHqqyK";
const searchInput = document.getElementById("search-input");
const numberInput = document.getElementById("number-input");
const button = document.getElementById("button");
const results = document.getElementById("results");

button.addEventListener("click", (btn)=>{
    btn.preventDefault();
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=${numberInput.value}&lang=en&q=${searchInput.value}`)
    .then(response =>{
        return response.json();
    }).then(JSONData =>{
        for(let i = 0; i<numberInput.value; i++){
            let image = document.createElement("img");
            results.appendChild(image);
            image.src = JSONData.data[i].images.downsized.url;
        }
    })
    .catch(e =>{
        console.log("Error: " + e);
    });
});

