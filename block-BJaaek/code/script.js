let clickMe = document.querySelector(".first")
let moveMe = document.querySelector(".second")
let p = document.querySelector("p")

clickMe.addEventListener('click',function clickChange(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    clickMe.style.backgroundColor = bgColor;
})
moveMe.addEventListener('mousemove',function clickChange(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    moveMe.style.backgroundColor = bgColor;
})