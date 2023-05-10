user_submit = document.getElementById("create_user");
username = document.getElementById("usernameForm");
city = document.getElementById("cityForm");
user_submit.addEventListener("click", createUser, false)
function createUser(e) {
    //stocker l'utilisateur dans une liste de users (creer la liste si elle n'existe pas)
    //assigner setItem("current_user", JSON.stringify(user))
    e.preventDefault();
    user = username.value()
    citySubmit = city.value()
    newUser = {}
    if (citySubmit || user) {
        newUser.username = user;
        newUser.ville = citySubmit;
        localStorage.setItem("currentUser", JSON.stringify(user))
    } 
    else {
        alert("Au moins un champs doit être rempli.")
    } 
    username.value = "";
    city.value = "";
}
