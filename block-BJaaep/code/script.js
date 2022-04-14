let allboxes =document.querySelectorAll(".box");
allboxes.forEach((ele,index)=>{
    ele.addEventListener("click",(event)=>{
        event.target.innerText = index + 1;
        setTimeout(()=>{
            event.target.innerText = ""
        },1500)
    });
});

let boxSecond = document.querySelectorAll(".second");
// let li = boxSecond.children[0]
// li.setAttribute("data-text",1)
function handler(){
    boxSecond.forEach((ele,i) => {
        ele.setAttribute("data-text", i+1)
    })
}


let box = document.querySelector(".secondBox")
box.addEventListener("click",handler)
