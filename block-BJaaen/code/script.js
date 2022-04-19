let computer = document.getElementById('computer-choice');
let user = document.getElementById('user-choice');
let gameResult = document.getElementById("result");
let btn = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

btn.forEach(choice => choice.addEventListener('click', (event) =>{
    userChoice = event.target.id;
    user.innerText = userChoice;
    getComputer();
    getResult();
}))


function getComputer(){
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1){
        computerChoice = "rock";
    }
    if (randomNum === 2){
        computerChoice = "paper";
    }
    if (randomNum === 3){
        computerChoice = "scissors";
    }
    computer.innerText = computerChoice;
}

function getResult(){
    
    if (computerChoice === userChoice){
        result = "Its a Draw"
    }
    if (computerChoice === "rock" && userChoice === "scissors"){
        result = "You Loose"
    }
    if(computerChoice === "scissors" && userChoice === "rock"){
        result = "You win"
    }
    if (computerChoice === "paper" && userChoice === "scissors"){
        result = "You Win"
    }
    if (computerChoice === "scissors" && userChoice === "paper"){
        result = "You Loose"
    }
    if (computerChoice === "rock" && userChoice === "paper"){
        result = "You win"
    }
    if (computer.innerText === "paper" && userChoice === "rock"){
        result = "You Loose"
    }
    gameResult.innerText = result;
}
