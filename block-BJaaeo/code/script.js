let input = document.querySelector("h2");
let buttons = document.querySelectorAll(".btn");

let initialValue = 0;

function operations(event) {
    if(event.target.classList.contains('btn-equal')){
        input.innerText = eval(input.innerText);
        return input.innerText;
    } else if(event.target.classList.contains('clear-btn')){
        input.innerText = initialValue;
        return input.innerText;
    } else if(input.innerText == initialValue){
        input.innerHTML = event.target.innerText;
        return input.innerHTML;
    } else{
        input.innerText += event.target.innerText;
    }
}

buttons.forEach((ele) => {
    ele.addEventListener('click', operations);
})