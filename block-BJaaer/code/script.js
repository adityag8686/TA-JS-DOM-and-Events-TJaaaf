let form = document.querySelector("form");
let info = document.querySelector(".info");

let userInfo = {};
function handleSubmit (event){
    event.preventDefault();
    userInfo.name = form.elements.name.value;
    userInfo.email = form.elements.email[0].value;
    userInfo.category = form.elements.gender.value;
    userInfo.color = form.elements.color.value;
    userInfo.rate = form.elements.range.value;
    userInfo.drone = form.elements.drone.value;
    userInfo.terms = form.elements.terms.checked;
    formBox(userInfo)
}
form.addEventListener("submit", handleSubmit);

function formBox(user){
    document.querySelector("body").innerHTML = "";
    let name = document.createElement("h2");
    name.innerText = `Hello ${user.name}`;
    let email = document.createElement("p");
    email.innerText = `Email : ${user.email}`;
    let movie = document.createElement("p");
    movie.innerText = `Movie : ${user.category}`;
    let color = document.createElement('p');
    color.innerText = `Color : ${user.color}`;
    let rate = document.createElement('p');
    rate.innerText = `Rating : ${user.rate}`;
    let drone = document.createElement('p');
    drone.innerText = `Drone : ${user.drone}`;
    let terms = document.createElement('p');
    terms.innerText = `Terms : ${user.terms}`;
    info.append(name,email,movie,color,rate,drone,terms);
    document.querySelector("body").append(info);
}