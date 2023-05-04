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
})
.catch(error => {
    console.error('An error occured. ', error);
});