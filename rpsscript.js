function getComputerChoice(){
    let choice=Math.floor(Math.random()*3);
    //choses number from 0, 1, or 2 randomly
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
function playGame(){
    //Initial scores set to 0
    let humanScore=0;
    let computerScore=0;

    //setup text display and scoreboard
    const display=document.querySelector("div");
    const scoreBoard=document.querySelector(".scoreboard");

    //determines if someone has won yet
    let winner="";

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

    //Different outputs to display depending on who won. also increment score count for variable
    if (result==="win"){
        const newRound=document.createElement("p");
        newRound.textContent=`You win! ${humanChoice} beats ${computerChoice}!`;
        display.appendChild(newRound);
        humanScore++;
    }
    else if (result==="lose"){
        const newRound=document.createElement("p");
        newRound.textContent=`You lose! ${computerChoice} beats ${humanChoice}!`;
        display.appendChild(newRound);
        computerScore++;
    }
    else{
        const newRound=document.createElement("p");
        newRound.textContent=`Tie!`;
        display.appendChild(newRound);
    }
    //update scoreboard.
    scoreBoard.textContent=`Score: Human ${humanScore} Computer ${computerScore}`;

    //if someone won, insert that at top of screen and the winner is set in stone
    if (humanScore==5 && winner===""){
        winner="human";
        const winnerDisplay=document.createElement("p");
        winnerDisplay.textContent="Winner: Human";
        display.insertBefore(winnerDisplay, scoreBoard);
    }
    else if (computerScore==5 && winner===""){
        winner="computer";
        const winnerDisplay=document.createElement("p");
        winnerDisplay.textContent="Winner:Computer";
        display.insertBefore(winnerDisplay, scoreBoard);
    }

    }
    
    
    const buttons=document.querySelectorAll("button");
    //Selects all buttons to allow for play using buttons instead of input
    buttons.forEach((button)=>{
        //Add click event listener for each button that plays a round
        button.addEventListener("click", ()=>{
            playRound(button.id, getComputerChoice());
        });
    });
    //Disable scorekeeping for now
    //console.log(`Your score was ${humanScore} and your opponenent's score was ${computerScore}`);
}
playGame();
