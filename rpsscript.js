function getComputerChoice(){
    let choice=Math.floor(Math.random()*3);
    //choses number from 0, 1, or 2 randomly
    console.log(choice);
    if (choice == 0){
        return "rock";
    }
    else if (choice ==1){
        return "paper";
    }
    else if (choice ==2){
        return "scissors";
    }
}
function getHumanChoice(){
    let humanChoice= prompt ("What's your choice?");
    //Makes human choice case insensitive to help out later
    humanChoice= humanChoice.toLowerCase();
    // If someone makes a valid choice return as string
    if (humanChoice==="rock"){
        return "rock";
    }
    else if (humanChoice==="paper"){
        return "paper";
    }
    else if (humanChoice==="scissors"){
        return "scissors";
    // If someone types anything else give error
    }
    else{
        return "error";
    }
}
//Initial scores set to 0
let humanScore=0;
let computerScore=0;
function playRound(humanChoice, computerChoice){
    //all options where player picked rock
    //added result declaration to fix bug
    let result="";
    if (humanChoice==="rock"){
        if (computerChoice==="rock"){
            result="tie";
        }
        else if (computerChoice==="paper"){
            result="lose";
        }
        else{
            result="win";
        }
    }
    //player picked paper
    else if (humanChoice==="paper"){
        if (computerChoice==="rock"){
            result="win";
        }
        else if (computerChoice==="paper"){
            result="tie";
        }
        else {
            result="lose";
        }
    }
    //player picked scissors
    else{
        if (computerChoice==="rock"){
            result="lose";
        }
        else if (computerChoice==="paper"){
            result="win";
        }
        else{
            result="tie";
        }
    }

    //Different outputs to console depending on who won. also increment score count.
    if (result==="win"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
        humanScore++;
    }
    else if (result==="lose"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
        computerScore++;
    }
    else{
        console.log(`Tie!`)
    }
}
//temporarily set const for one round of play
const humanSelection=getHumanChoice();
const computerSelection=getComputerChoice();
playRound(humanSelection, computerSelection);