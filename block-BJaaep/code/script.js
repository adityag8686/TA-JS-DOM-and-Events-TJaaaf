let allboxes =document.querySelectorAll(".first li");
allboxes.forEach((ele,index)=>{
    ele.addEventListener("click",(event)=>{
        event.target.innerText = index + 1;
        setTimeout(()=>{
            event.target.innerText = ""
        },1500)
    });
});

let boxSecond = document.querySelectorAll(".second");

let box = document.querySelector(".secondBox")
box.addEventListener("click",(event) => {
    boxSecond.forEach((ele,i) => {
        ele.setAttribute("data-text", i+1)
    });
    let text = event.target.dataset.text;
    event.target.innerText = text;
    setTimeout(()=>{
        event.target.innerText = ""
    },1500)
});
