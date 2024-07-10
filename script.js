let humanScore = 0;
let computerScore = 0;


function playGame(){
    for(let i = 0; i < 5; i++){
        playRound();
    }
    if (humanScore > computerScore){
        console.log("You won the game");
    }
    else{
        console.log("Computer won the game");
    }
}


function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}


function playRound(){
    let computerChoice = getComputerChoice();
    let humanChoice = prompt("Enter your choice\n").toLowerCase().trim();
    if (computerChoice == humanChoice){
        console.log("Draw");
    }
    else if (humanChoice == "rock"){
        if (computerChoice == "paper"){
            console.log("You Lose! Paper beats Rock");
            computerScore += 1;
        }
        else{
            console.log("You Won! Rock beats Scissors");
            humanScore += 1;
        }
    }
    else if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            console.log("You Won! Paper beats Rock");
            humanScore += 1;
        }
        else{
            console.log("You Lose! Scissors beats Paper");
            computerScore += 1;
        }
    }
    else if (humanChoice == "scissors"){
        if (computerChoice == "paper"){
            console.log("You Won! Scissors beats Paper");
            humanScore += 1;
        }
        else{
            console.log("You Lose! Rock beats Scissors");
            computerScore += 1;
        }
    }
}


playGame();