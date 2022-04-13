let body = document.querySelector('body');
let container = document.createElement('div');

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

container.style.display = "flex";
container.style.flexWrap = 'wrap';
body.append(container);


for (let i = 0; i<500; i++){
let box = document.createElement('div') 
box.className = "box"
box.style.height = "4rem";
box.style.width = "4rem"  
box.style.border = "1px solid black";
let p = document.createElement('p')
p.innerText = random(500);
box.append(p);
container.append(box);
}

let boxes = document.querySelectorAll('.box');

function example() {
    boxes.forEach((ele) => {
        ele.style.backgroundColor = disco();
        ele.children[0].innerText = random(500);
        
    });
}

container.addEventListener("mousemove", example);
// let body = document.querySelector('body');
// let outerBox = document.createElement('div');
// function disco(){
//     var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
//     return bgColor;
// }
// function random(max){
//     var num = Math.floor(Math.random() * max);
//     return num;
// }
// outerBox.style.display = "flex";
// outerBox.style.flexWrap = "wrap"
// body.append(outerBox);
// for (let i = 0; i <= 505; i++) {
//     let box = document.createElement("div");
//     box.className = "box"
//     box.style.height = "4rem";
//     box.style.width = "4rem";
//     box.style.border = "1px solid black";
//     let p = document.createElement('p');
//     p.innerText = random(500);
//     box.append(p);
//     outerBox.append(box);
// }
// let boxes = document.querySelectorAll(".box");
// function letExample(){
//     boxes.forEach((ele) => {
//         ele.style.backgroundColor = disco();
//         ele.children[0].innerText = random(500);
//     })
// }
// outerBox.addEventListener("mousemove", letExample);