let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const playerScore = document.querySelector('.player-score');
const compScore = document.querySelector('.computer-score');
const playAgain = document.querySelector('.play-again-btn');

const comChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const idx = Math.floor(Math.random() * choices.length);
    return choices[idx];
}

const playGame = (userChoice) => {
    const compChoice = comChoice();
    console.log("userChoice = " + userChoice);
    console.log("compChoice = " + compChoice);
    checkWinner(userChoice, compChoice);
    playerScore.innerText = userScore;
    compScore.innerText = computerScore;
}


choices.forEach(choice => {
    choice.addEventListener('click', () => {
        console.log("clicked");
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});

const checkWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        console.log("It's a draw!");
    } else if ((userChoice === 'rock' && compChoice === 'scissors') ||
               (userChoice === 'paper' && compChoice === 'rock') ||
               (userChoice === 'scissors' && compChoice === 'paper')) {
        userScore++;
        console.log("You win! Your score: " + userScore);
    } else {
        computerScore++;
        console.log("You lose! Computer score: " + computerScore);
    }
}

playAgain.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    playerScore.innerText = userScore;
    compScore.innerText = computerScore;
    console.log("Game reset. Scores set to zero.");
});