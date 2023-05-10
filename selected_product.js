let currentProduct = JSON.parse(localStorage.getItem("products"))[Number(localStorage.getItem("selectedProduct"))-1];

let linkTitle = document.createElement("div")
let productsLink = document.createElement("a")
let title = currentProduct.title
productsLink.setAttribute("href", "./products.html")
productsLink.id("productsLink")
linkTitle.appendChild(productsLink)
linkTitle.innerText = " / " + title

let infoDOM = document.getElementById("productInfo")
let titleDOM = document.createElement("div")
titleDOM.innerText = title

let categoryDOM = document.createElement("div")
categoryDOM.innerText = currentProduct.category

let brandDOM = document.createElement("div")
brandDOM.innerText = currentProduct.brand

let ratingDOM = document.createElement("div")
ratingDOM.innerText = currentProduct.rating
let priceDOM = document.createElement("div")

priceDOM.innerText = toString(currentProduct.price) + "  " + toString(currentProduct.price / (1+(12.96/100)))

let descriptionDOM = document.createElement("div")
descriptionDOM.innerText = currentProduct.description

