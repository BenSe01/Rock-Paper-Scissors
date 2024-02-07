const resultText = document.querySelector(".result-text");
const playerScoreText = document.querySelector("#score-player");
const computerScoreText = document.querySelector("#score-computer");


let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}




const rockBTN = document.querySelector("#btn-rock");
const paperBTN = document.querySelector("#btn-paper");
const scissorsBTN = document.querySelector("#btn-scissors");

rockBTN.addEventListener("click", function() {
    const playerSelection = "rock";
    const computerChoice = getComputerChoice();

    const result = playRound(playerSelection, computerChoice);
    console.log(result);
});

paperBTN.addEventListener("click", function() {
    const playerSelection = "paper";
    const computerChoice = getComputerChoice();

    const result = playRound(playerSelection, computerChoice);
    console.log(result);
});

scissorsBTN.addEventListener("click", function() {
    const playerSelection = "scissors";
    const computerChoice = getComputerChoice();

    const result = playRound(playerSelection, computerChoice);
    console.log(result);
});

function playRound(playerSelection, computerChoice) {
    
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    let computerChoiceLowerCase = computerChoice.toLowerCase();

    if (playerSelectionLowerCase === "scissors" && computerChoiceLowerCase === "rock") {
        updateResultText("You lose. Scissors gets beaten by Rock!");
        computerScore = computerScore + 1;
        computerScoreText.textContent = computerScore;
    } else if (playerSelectionLowerCase === "scissors" && computerChoiceLowerCase === "paper") {
        updateResultText("You win! Scissors beats Paper.");
        playerScore = playerScore + 1;
        playerScoreText.textContent = playerScore;
    } else if (playerSelectionLowerCase === "paper" && computerChoiceLowerCase === "rock") {
        updateResultText("You win! Paper beats Rock.");
        playerScore = playerScore + 1;
        playerScoreText.textContent = playerScore;
    } else if (playerSelectionLowerCase === "paper" && computerChoiceLowerCase === "scissors") {
        updateResultText("You lose. Paper gets beaten by Scissors!");
        computerScore = computerScore + 1;
        computerScoreText.textContent = computerScore;
    } else if (playerSelectionLowerCase === "rock" && computerChoiceLowerCase === "paper") {
        updateResultText("You lose. Rock gets beaten by Paper!");
        computerScore = computerScore + 1;
        computerScoreText.textContent = computerScore;
    } else if (playerSelectionLowerCase === "rock" && computerChoiceLowerCase === "scissors") {
        updateResultText("You win! Rock beats Scissors.");
        playerScore = playerScore + 1;
        playerScoreText.textContent = playerScore;
    } else  {
        updateResultText(`It's a tie! You both chose ${computerChoice}!`);
    }

    if (playerScore === 5) {
        updateResultText("You win the Game :) Let's play again!");
    } else if (computerScore === 5) {
        updateResultText("You lose the Game :( Let's play again!");
    }

    if (playerScore >= 5 || computerScore >= 5) {
       const weaponButtonsContainer = document.querySelector(".weapon-btns");
       weaponButtonsContainer.remove();

       const resetButton = document.querySelector("#reset-btn");
       resetButton.style.visibility = "visible";
    }

    }


    function updateResultText(newText) {
        //Create a new span element to hold the text
        const span = document.createElement("span");
        span.textContent = newText;

        // Clear the existing content and append the new span
        resultText.innerHTML = "";
        resultText.appendChild(span);
    }



