let currentProduct = JSON.parse(localStorage.getItem("products"))[Number(localStorage.getItem("selectedProduct"))-1];

let linkTitle = document.createElement("div");
let productsLink = document.createElement("a");
let title = currentProduct.title;
productsLink.setAttribute("href", "./products.html");
productsLink.id = "productsLink";
productsLink.innerText = "Products";
linkTitle.appendChild(productsLink);
let slashTitle = document.createElement("span")
slashTitle.innerText = " / " + title;
linkTitle.appendChild(slashTitle);
linkTitle.style.backgroundColor = "lightgrey";
linkTitle.style.borderRadius = "12px"
let titleDOM = document.createElement("h2");
titleDOM.innerText = title;
titleDOM.style.fontWeight = "bolder";

let categoryDOM = document.createElement("div");
categoryDOM.innerText = "Category: " + currentProduct.category;

let brandDOM = document.createElement("div");
brandDOM.innerText = "Brand: " + currentProduct.brand;

let ratingDOM = document.createElement("div");
ratingDOM.innerText = currentProduct.rating;
let priceDOM = document.createElement("div");

let realPrice = document.createElement("span");
realPrice.innerText = (currentProduct.price).toString() + "   "
realPrice.style.fontWeight = "bolder"
realPrice.style.fontSize = "1.25em"
let originalPrice = document.createElement("span")
originalPrice.style.textDecoration = "line-through"
originalPrice.style.color = "grey"
originalPrice.innerText = (Math.round(currentProduct.price / (1+(12.96/100))*100)/100).toString()
priceDOM.appendChild(realPrice)
priceDOM.appendChild(originalPrice)

let descriptionDOM = document.createElement("div");
descriptionDOM.innerHTML = "<b>Description</b><p>" + currentProduct.description + "</p>"

let image = document.getElementById("currentProduct");
image.setAttribute("src", currentProduct.images[0]);

let infoDOM = document.getElementById("productInfo");
let stars = infoDOM.firstChild;
infoDOM.insertBefore(linkTitle,stars);
infoDOM.insertBefore(titleDOM,stars);
infoDOM.insertBefore(categoryDOM,stars);
infoDOM.insertBefore(brandDOM,stars);
generateStars();
infoDOM.appendChild(priceDOM);
descriptionDOM.style.borderBottom = "1px solid grey";
infoDOM.appendChild(descriptionDOM);
let cartButton = document.createElement("button");
cartButton.id = "cartButton"
cartButton.innerHTML = "Add to cart"
cartButton.addEventListener("click", addCart)
infoDOM.appendChild(cartButton)

function addCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
        cart.push(currentProduct.id)
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    else {
        cart = [currentProduct.id]
        localStorage.setItem("cart", JSON.stringify(cart))
    }
}
function generateStars() {
    starsNum = Math.floor(currentProduct.rating)
    halfStarsNum = currentProduct.rating % 1
    let rating = "star"
    if (starsNum != 0) {
        rating += starsNum;
    }
    if (halfStarsNum >= 0.5) {
        rating += "half"
    }
    document.getElementById(rating).checked = true;
}