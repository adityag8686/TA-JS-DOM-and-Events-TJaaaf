function disco(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}
function random(max){
    var num = Math.floor(Math.random() * max)
    return num;
}

let boxes = document.querySelector(".boxes")

for (let i = 0; i<500; i++){
let div = document.createElement('div') 
div.classList.add("box")
let h2 = document.createElement('h2')
h2.innerText = random(500);
div.append(h2);
boxes.append(div)
}

let allboxes = document.querySelectorAll(".box")
function example() {
    allboxes.forEach((box) => {
        box.style.backgroundColor = disco();
        box.children[0].innerText = random(500);    
    });
}

boxes.addEventListener("mousemove", example);
