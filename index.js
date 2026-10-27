const choices= ["rock", "paper", "scissors"];
let humanScore= 0;
let computerScore= 0;

function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)];
}

function getHumanChoice(){
    let userChoice= prompt("Enter your choice: ", "Rock, Paper, Scissors");
    return userChoice.toLocaleLowerCase();
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. Its a Tie!`);
        }
        else if(computerChoice === "paper"){
            console.log(`You chose ${humanChoice}. ComputerCompute chose ${computerChoice}. You lose!`);
            computerScore++;
        }
        else{
            console.log(`You chose ${humanChoice}. ComputerCongrats, Computer chose ${computerChoice}. You win!`);
            humanScore++;
        }
    }
    else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            console.log(`You chose ${humanChoice}. ComputerCongrats, Computer chose ${computerChoice}. You win!`);
            humanScore++;
        }
        else if(computerChoice === "paper"){
            console.log(`You chose ${humanChoice}. ComputerComputer chose ${computerChoice}. Its a Tie!`)
        }
        else{
            console.log(`You chose ${humanChoice}. ComputerCompute chose ${computerChoice}. You lose!`);
            computerScore++;
        }
    }
    else if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
            console.log(`You chose ${humanChoice}. ComputerCompute chose ${computerChoice}. You lose!`);
            computerScore++;
        }
        else if(computerChoice === "paper"){
            console.log(`You chose ${humanChoice}. ComputerCongrats, Computer chose ${computerChoice}. You win!`);
            humanScore++;
        }
        else{
            console.log(`You chose ${humanChoice}. ComputerComputer chose ${computerChoice}. Its a Tie!`)
        }
    }
}

function playGame(rounds){
    for(let i=0; i < rounds; i++){
        let humanSelection= getHumanChoice();
        let computerSelection= getComputerChoice();
        playRound(humanSelection, computerSelection);
    } 
    console.log(`Your score: ${humanScore} vs Computer score: ${computerScore} `)
}

playGame(5);

