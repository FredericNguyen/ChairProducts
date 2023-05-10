user_submit = document.getElementById("create_user");
username = document.getElementById("usernameForm");
city = document.getElementById("cityForm");
user_submit.addEventListener("click", createUser, false)
function createUser(e) {
    e.preventDefault();
    user = username.value;
    citySubmit = city.value;
    newUser = {}
    if (citySubmit || user) {
        newUser.username = user;
        newUser.ville = citySubmit;
        localStorage.setItem("currentUser", JSON.stringify(newUser))
        location.replace('./products.html');
    } 
    else {
        alert("Au moins un champs doit être rempli.")
    } 
    username.value = "";
    city.value = "";
}
