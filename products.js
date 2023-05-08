let key = "bfd822295abb46a8a4a01742230405";
//city = localStorage[current_user].city;
fetch('http://api.weatherapi.com/v1/current.json?key=' + key + "&q=London", {
    headers: {
        Accept: "application/json;charset=utf-8"
    }
})
.then(response => {
     if (response.ok) {
        return response.json();
     }
     throw new Error('Network response was not ok.');
})
.then(data => {
    console.log(data);
    document.getElementById("ville").innerText = data.location.name;
    document.getElementById("region").innerText = "(" + data.location.region + ", " + data.location.country + ")";
    let meteoImg = document.createElement("img");
    meteoImg.setAttribute("src", data.current.condition.icon)
    document.getElementById("meteo-icon").prepend(meteoImg);
    document.getElementById("temp").innerText = data.current.temp_c + "°C";
    let userWelcome = document.createElement("div");
    userWelcome.style.textAlign = "right";
    userWelcome.style.fontWeight = "bold";
    userWelcome.innerText = "Hi, John";
    document.getElementById("user-meteo-right").prepend(userWelcome)
})
.catch(error => {
    console.error('An error occured. ', error);
});

function buttonHtmlPages() {
    let productsDOM = document.getElementById("products-container")
    for (let i=0; i<10;i++) {
        let buttonPage = document.createElement("button");
        buttonPage.innerText = i+1;
        buttonPage.classList.add("buttonPages")
        buttonPage.addEventListener("click", listProducts);
        document.getElementById("pagesButtons").appendChild(buttonPage)
    }
    if (!document.getElementById("current-page")) {
        document.getElementById("pagesButtons").firstChild.click()
    }
    function listProducts(event) {
        event.preventDefault();
        productsDOM.innerHTML = "";
        if (document.getElementById("current-page")) {
            document.getElementById("current-page").id = "";
        }
        this.id = "current-page";
        let pageNumber = Number(this.innerText)-1;
        
        fetch('https://dummyjson.com/products?limit=0')
            .then(res => res.json())
            .then(data => {
                const PAGE_MAX = 10;
                let i;
                pageNumber == 0 ? i = 0 : i = (pageNumber*PAGE_MAX);
                let max = i + 10;
                if (max >= 100) {
                    max = 100;
                }
                localStorage.setItem("products", JSON.stringify(data.products))
                for (i; i < (max); i++) {
                    let product = document.createElement("div");
                    product.classList.add("product");
                    let productImg = document.createElement("img");
                    let productNamePrice = document.createElement("div");
                    productNamePrice.style.textAlign = "center";
                    let productName = document.createElement("div");
                    productName.style.fontWeight = "bold";
                    let productPrice = document.createElement("div");
                    productPrice.style.color = "grey";
                    productPrice.style.fontSize = "0.75em";
                    let productData = data.products[i];
                    product.id = "product-" + productData.id;
                    productImg.setAttribute("src", productData.thumbnail);
                    productName.innerText = productData.title;
                    productPrice.innerText = "$" + productData.price;

                    productNamePrice.appendChild(productName);
                    productNamePrice.appendChild(productPrice);
                    product.appendChild(productImg);
                    product.appendChild(productNamePrice);
                    productsDOM.appendChild(product);
                }
            });
    }
}

buttonHtmlPages();