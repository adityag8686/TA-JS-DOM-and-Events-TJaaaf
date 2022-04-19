let form = document.querySelector("form");
let display = document.querySelector(".display");
let moviesList = {};

function handleSubmit (event) {
    event.preventDefault();
    moviesList.movie = form.elements.movie.value;
    appearance();
}

function appearance (){
    let inner = document.createElement("div")
    inner.classList.add("inner")

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("input", (event) =>{
    let elm = event.target;
    let h3 = elm.nextElementSibling;
    h3.classList.toggle("checkbox");
    
    })

    let userInput = document.createElement("h3");
    userInput.innerText = moviesList.movie;
    

    let close = document.createElement("h4")
    close.innerText = "❌"
    close.addEventListener("click", () =>{
        inner.remove("inner")
    })
    inner.append(checkbox,userInput,close);
    display.append(inner);

}
form.addEventListener("submit", handleSubmit);