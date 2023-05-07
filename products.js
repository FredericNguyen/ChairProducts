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

function loadProducts() {
    let pageNum = document.getElementById("currentPage");

}

function buttonHtmlPages(productsLength) {
    let productsDOM = document.getElementById("products-container")
    for (let i=0; i<Math.floor(productsLength/10);i++) {
        let buttonPage = document.createElement("button");
        buttonPage.innerText = i;
        buttonPage.classList.add("buttonPages")
    }
}

fetch('https://dummyjson.com/products?limit=0')
.then(res => res.json())
.then(data => console.log(data));