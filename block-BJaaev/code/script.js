let inputText = document.querySelector("#text");
let ul = document.querySelector("ul");
let all = document.querySelector(".all");
let active = document.querySelector(".active");
let completed = document.querySelector(".completed");
let clear = document.querySelector(".clear");

let allTodos = [];



function handleInput(event){
    if(event.keyCode === 13 && event.target.value !== ""){
        let todo = {
            name : event.target.value,
            isDone : false
        };
        allTodos.push(todo);
        event.target.value = "";
        localStorage.setItem ("todos", JSON.stringify(allTodos));
        createUI();
    }
}

function handleDelete(event){
    let id = event.target.dataset.id;
    allTodos.splice(id, 1 )
    localStorage.setItem ("todos", JSON.stringify(allTodos));
    createUI()
}

function handleToggle(event){
    let id = event.target.dataset.id
    allTodos[id].isDone = !allTodos[id].isDone;
    localStorage.setItem ("todos", JSON.stringify(allTodos));
    createUI();
}

function createUI(data = allTodos){
    ul.innerHTML = "";
    data.forEach((todo,index) => {
        let li = document.createElement("li");
        li.classList.add("flex")
        let input = document.createElement("input");
        input.type = "checkbox"
        input.setAttribute("data-id", index)
        input.addEventListener("input",handleToggle)
        input.checked = todo.isDone;
        let p = document.createElement("p");
        p.innerText = todo.name;

        if(input.checked == true){
            p.style.textDecoration = "line-through"
        }
        
        let span = document.createElement("span");
        span.innerText = "❌"
        span.setAttribute("data-id", index)
        span.addEventListener("click", handleDelete)


        li.append(input,p,span)
        ul.append(li)
    });
    
}

all.addEventListener("click", () =>{ 
    let fullDetail = allTodos.map((todo) => todo )
    createUI(fullDetail);
});

active.addEventListener("click", () =>{ console.log("done")
    let remaining = allTodos.filter((todo) => !todo.isDone);
    createUI(remaining);
});

completed.addEventListener("click", () =>{
    let com = allTodos.filter((todo )=> todo.isDone);
    createUI(com)
});

clear.addEventListener("click", () =>{
    allTodos = allTodos.filter((todo) => !todo.isDone)
    createUI();
})

inputText.addEventListener("keyup", handleInput)
