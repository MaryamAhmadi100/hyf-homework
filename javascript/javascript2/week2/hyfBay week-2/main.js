console.log("Script loaded");
const contentUl = document.getElementById("contents");
const search = document.getElementById("search");

let products = getAvailableProducts();
console.log(products);

search.addEventListener('input', e =>{
    console.log("searhed: " + search.value);
    let filteredProducts = products.filter(p =>{
        let item = p.name.toLowerCase();
        if(item.includes(search.value.toLowerCase())){
            console.log(p);
            return true;
        }else{
            return false;
        }
    });
    contentUl.childNodes.forEach(c =>{
        c.remove();
    })
    renderProducts(filteredProducts);
})

function renderProducts(products){
    for(i=0;i<products.length;i++){
        const listItem = document.createElement("li");

        const productName = products[i].name;
        const productPrice = products[i].price;
        const productRating = products[i].rating;

        const h2 = document.createElement("h2");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");

        h2.textContent = productName;
        p1.textContent = "Price: " + productPrice + " kr";
        p2.textContent = "Rating: " + productRating + "/10";
        
        listItem.appendChild(h2); 
        listItem.appendChild(p1); 
        listItem.appendChild(p2); 

        contentUl.appendChild(listItem);
    }
}
