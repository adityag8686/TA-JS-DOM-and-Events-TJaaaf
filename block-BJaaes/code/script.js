let form = document.querySelector("form");
let usernameError = {};

function success(user){
    let elm = form.elements[user];
    elm.nextElementSibling.innerText = "";
    usernameError = "";
    elm.parentElement.classList.remove("error");
    elm.parentElement.classList.add("success")
    
}
function error(user){
    let elm = form.elements[user]
    elm.nextElementSibling.innerText = usernameError[user]
    elm.parentElement.classList.add("error");
}

function handleSubmit(event) {
    event.preventDefault();
    let elements = event.target.elements;
    let username = elements.username.value;
    let name = elements.name.value;
    let email = elements.email.value;
    let phone = elements.phone.value;
    let password = elements.password.value;
    let passwordCheck = elements.passwordCheck.value;

    // 1. Username can't be less than 4 characters
    if (username.length < 4){
        usernameError.username = "Username can't be less than 4 characters"
        error("username");
    }
    else {
        success("username");
    }
    // Name can't be numbers
    if (name.split('').some(e => Number(e))){
        usernameError.name = "Name can't be numbers"
        error("name");
    }
    else{
        success("name");
    }
    // Email must contain the symbol @
    if (!email.includes("@")){ 
        usernameError.email = "Email must contain the symbol ";
        error("email");
    }
    else if(email.length < 7){ 
        usernameError.email = "Email must contain the symbol ";
        error("email");
    }
    else {
        success("email");
    }

    // Phone numbers can only be a number
// Length of phone number can't be less than 7

    if (!typeof phone == "Number"){
        usernameError.phone = "It should be only numbers";
        error("phone");
    }
    else if (phone.length <7){
        usernameError.phone = "Min 7 length";
        error("phone");
    }
    else{
        success("phone");
    }
    if (password !== passwordCheck){
        usernameError.passwordCheck = "both are not same";
        error("passwordCheck");
        error("password");
    }
    else{
        success("password");
        success("passwordCheck");
    }
    }
    
form.addEventListener("submit", handleSubmit);