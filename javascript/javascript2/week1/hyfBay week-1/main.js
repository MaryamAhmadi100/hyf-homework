console.log("Script loaded");
const contentUl = document.getElementById("contents");

const products = getAvailableProducts();
console.log(products);

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

renderProducts(products);