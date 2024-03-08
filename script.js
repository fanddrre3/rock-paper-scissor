const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissor');
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ['rock', 'paper', 'scissors'];

    playerOptions.forEach(option => {
      option.addEventListener('click', function () {
        const movesLeft = document.querySelector('.movesleft');
        moves++;
        movesLeft.innerText = `Moves Left: ${10 - moves}`;

        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];

        winner(this.innerText, computerChoice)

        if (moves == 10) {
          gameOver(playerOptions, movesLeft);
        }
      })
    })
  }
}

const winner = (player, computer) => {
  const result = document.querySelector('.result');
  const playerScoreBoard = document.querySelector('.p-count');
  const computerScoreBoard = document.querySelector('.c-count');
  player = player.toLowerCase();
  computer = computer.toLowerCase();
  if (player === computer) {
    result.textContent = 'Tie'
  }
  else if (player == 'rock') {
    if (computer == 'paper') {
      result.textContent = 'Computer Won';
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = 'Player Won';
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  }
}


// function game() {
//   while (rounds < 5) {
//     const playerChoice = prompt("Choose: rock, scissors, or paper");
//     const computerChoice = computerPlay();
//     const result = playRound(playerChoice, computerChoice);

//     alert(`Player: ${playerChoice} | Computer: ${computerChoice}\n${result}`);

//     if (result.includes("Win")) {
//       playerScore++;
//     } else if (result.includes("Lose")) {
//       computerScore++;
//     }

//     rounds++;
//   }

//   reportWinner();
// }

// function computerPlay() {
//   const choices = ["rock", "scissors", "paper"];
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex];
// }

// function playRound(playerSelection, computerSelection) {
//   const player = playerSelection.toLowerCase();
//   const computer = computerSelection.toLowerCase();

//   if (player === computer) {
//     return "It's a tie!";
//   } else if (
//     (player === "rock" && computer === "scissors") ||
//     (player === "scissors" && computer === "paper") ||
//     (player === "paper" && computer === "rock")
//   ) {
//     return `You win! ${player} beats ${computer}.`;
//   } else {
//     return `You lose! ${computer} beats ${player}.`;
//   }
// }

// function reportWinner() {
//   alert("Game Over!");

//   if (playerScore > computerScore) {
//     alert(`You win! Score: ${playerScore}-${computerScore}`);
//   } else if (computerScore > playerScore) {
//     alert(`You lose! Score: ${playerScore}-${computerScore}`);
//   } else {
//     alert("It's a tie! Score: " + playerScore);
//   }
// }

// game();
