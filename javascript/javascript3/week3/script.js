class Circle{
    constructor(x,y,r,startAngle,endAngle,fillColor, ctx){
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
        this.ctx = ctx;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.moveTo(this.x,this.y);
        this.ctx.arc(this.x, this.y, this.r, this.startAngle,this.endAngle);
        this.ctx.fillStyle = this.fillColor;
        this.ctx.fill();
    }
}

//Lets make some art using classes
const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");
const circles = [
    new Circle(282,214,15,0,360,"green",ctx1),
    new Circle(125,302,90,0,360,"red",ctx1),
    new Circle(130,94,40,0,360,"blue",ctx1),
    new Circle(400,460,200,0,360,"yellow",ctx1),
    new Circle(456,159,38,0,360,"orange",ctx1)
]

circles.forEach(c=>{
    c.draw();
})



//Now lets make art
const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const maxCircles = 1000;
let counter = 0;
function intervalCircles(){
    const interv = setInterval(()=>{
        counter++;
        const c = new Circle(randomInt(0,500),randomInt(0,500),randomInt(5,30),0,360,getRandomColor(),ctx2);
        c.draw();
        if(counter >= maxCircles){
            clearInterval(interv);
        }
    },100)
}

intervalCircles();

//Classmates
const classmates = document.getElementById("classmates");

function renderRepositories(username){
  const getData = new Promise((resolve,reject) =>{
    fetch(`https://api.github.com/search/repositories?q=user:${username}`).then((msg)=>{
      return msg.json();
    }).then((msg)=>{
      resolve(msg);
    }).catch((e)=>{
      reject(e);
    });
  });
  
  //Fullname, url and owner
  const userDiv = document.createElement("div");
  const repOwner = document.createElement("h2");
  const br = document.createElement("br");
  repOwner.innerHTML = "Github User: " + username;
  userDiv.appendChild(repOwner);
  classmates.appendChild(userDiv);
  userDiv.classList.add("user-div");
  
  getData.then((data)=>{
    data.items.forEach((rep)=>{
      const repDiv = document.createElement("div");
      userDiv.appendChild(repDiv);

      const repName = document.createElement("p");
      repName.innerHTML = rep.full_name;
      repDiv.appendChild(repName);

      const repUrl = document.createElement("a");
      repUrl.href = rep.url;
      repUrl.innerHTML = "Link";
      repDiv.appendChild(repUrl);

    })
  });
}

renderRepositories("");

//Shopping cart
const productsDiv = document.getElementById("products");
const productsPrice = document.getElementById("price");
const productsUsername = document.getElementById("username");

const APIKEY = "9f2a80d8316b32f573e9";

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency(currency){
    return new Promise((resolve,reject)=>{
        fetch(`https://free.currconv.com/api/v7/convert?q=DKK_${currency}&compact=ultra&apiKey=${APIKEY}`).then((msg)=>{
          return msg.json();  
        }).then((msg)=>{
            resolve(msg[Object.keys(msg)[0]] * this.price);
        }).catch((e)=>{
            reject(e);
        });
    });
  }

}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    let counter = 0;
    let foundProduct = false;

    this.products.forEach((p)=>{
        if(p==product){
            foundProduct = true;
            return;
        }
        counter++;
    });
    if(foundProduct){
        this.products.splice(counter,1);
    }
  }

  searchProduct(productName) {
    let foundProducts = [];
    this.products.forEach((p)=>{
        if(p.name == productName){
            foundProducts.push(p);
        }
    });
    return foundProducts;
  }

  getTotal() {
    let price = 0;
    this.products.forEach((p)=>{
        price += p.price;
    });
    return price;
  }

  renderProducts() {
    this.products.forEach((p)=>{
        const prod = document.createElement("p");
        prod.innerHTML = p.name + ": " + p.price + " kr";
        productsDiv.appendChild(prod);
    });
    
  }

  getUser(user) {
    return new Promise((resolve,reject) =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${user}`).then((msg)=>{
            resolve(msg.json());
        }).catch((e)=>{
            reject(e);
        })
    });
  }
}

const shoppingCart = new ShoppingCart();

const flatscreen = new Product("Flat-screen", 5000);
const laptop = new Product("Laptop", 4400);
const keyboard = new Product("Keyboard", 700);
const shoes = new Product("Shoes", 450);
const bread = new Product("Bread", 10);
const apple = new Product("Apple", 3);

shoppingCart.addProduct(laptop);
shoppingCart.addProduct(apple);
shoppingCart.addProduct(apple);
shoppingCart.addProduct(apple);
shoppingCart.addProduct(bread);
shoppingCart.addProduct(shoes);
shoppingCart.addProduct(keyboard);

shoppingCart.removeProduct(apple);




shoppingCart.getUser(4).then((data)=>{
    productsUsername.innerHTML = data.username;
})
productsPrice.innerHTML = "Total price: " + shoppingCart.getTotal() + " kr";

shoppingCart.renderProducts();
apple.convertToCurrency("NOK").then((msg)=>{
    console.log(apple.price + " DKK = " + msg + " NOK");
});
apple.convertToCurrency("USD").then((msg)=>{
    console.log(apple.price + " DKK = " + msg + " USD");
});


