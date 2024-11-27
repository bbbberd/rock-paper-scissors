let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const randomNumber = Math.random();
    if(randomNumber < 0.33){
        return "rock";
    } else if (randomNumber < 0.66){
        return "paper"
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();

    // Validate user input
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid input. Please enter rock, paper, or scissors.").toLowerCase();
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    // Make humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    // Determine the winner
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    // Log the updated scores
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`Human Choice: ${humanSelection}, Computer Choice: ${computerSelection}`);
playRound(humanSelection, computerSelection);



console.log(getHumanChoice());