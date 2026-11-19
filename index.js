const choices= ["rock", "paper", "scissors"];
let humanScore= 0;
let computerScore= 0;

function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)];
}

/*function getHumanChoice(){
    let userChoice= prompt("Enter your choice: ", "Rock, Paper, Scissors");
    return userChoice.toLocaleLowerCase();
}*/
const rock= document.querySelector(".rock");
const paper= document.querySelector(".paper");
const scissors= document.querySelector(".scissors");
let div= document.getElementById("result");
let score= document.getElementById("score");
let winner= document.getElementById("winner");

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            div.textContent=`You chose ${humanChoice}. Computer chose ${computerChoice}. Its a Tie!`;
        }
        else if(computerChoice === "paper"){
            div.textContent=`You chose ${humanChoice}. Computer chose ${computerChoice}. You lose!`;
            computerScore++;
        }
        else{
            div.textContent=`You chose ${humanChoice}. Computer chose ${computerChoice}. You win!`;
            humanScore++;
        }
    }
    else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            div.textContent=`You chose ${humanChoice}. Computer chose ${computerChoice}. You win!`;
            humanScore++;
        }
        else if(computerChoice === "paper"){
            div.textContent=`You chose ${humanChoice}. Computer chose ${computerChoice}. Its a Tie!`;
        }
        else{
            div.textContent=`You chose ${humanChoice}. Computer chose ${computerChoice}. You lose!`;
            computerScore++;
        }
    }
    else if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
            div.textContent=`You chose ${humanChoice}. Computer chose ${computerChoice}. You lose!`;
            computerScore++;
        }
        else if(computerChoice === "paper"){
            div.textContent=`You chose ${humanChoice}. Computer chose ${computerChoice}. You win!`;
            humanScore++;
        }
        else{
            div.textContent=`You chose ${humanChoice}. Computer chose ${computerChoice}. Its a Tie!`;
        }
    }
    score.textContent= `Human Score: ${humanScore} VS Computer Score: ${computerScore}`;
    if(humanScore === 5){
        winner.textContent= "Human won!!"
        rock.disabled= true;
        paper.disabled= true;
        scissors.disabled= true;
    }
    else if(computerScore === 5){
        winner.textContent="Computer won!!"
        rock.disabled= true;
        paper.disabled= true;
        scissors.disabled= true;
    }
}

rock.addEventListener("click", e=>{
    let compChoise= getComputerChoice();
    playRound("rock", compChoise);
})
paper.addEventListener("click", e=>{
    let compChoise= getComputerChoice();
    playRound("paper", compChoise);
})
scissors.addEventListener("click", e=>{
    let compChoise= getComputerChoice();
    playRound("scissors", compChoise);
})










/*let humanSelection= getHumanChoice();
let computerSelection= getComputerChoice(); 
playRound(humanSelection, computerSelection);

    function playGame(rounds){
    for(let i=0; i < rounds; i++){
        let humanSelection= getHumanChoice();
        let computerSelection= getComputerChoice();
        playRound(humanSelection, computerSelection);
    } 
    console.log(`Your score: ${humanScore} vs Computer score: ${computerScore} `)
}

playGame(5);*/

