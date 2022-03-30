
const gameArr = ["rock", "paper", "scissors"]

const getComputerSelection = () => gameArr[Math.floor(Math.random() * gameArr.length)];

let playerScore = 0;
let cpuScore = 0;
let score = `Player : ${playerScore} CPU : ${cpuScore}`
const rock_btn = document.querySelector('#rock');
const paper_btn = document.querySelector('#paper');
const scissors_btn = document.querySelector('#scissors');
const btns = document.querySelectorAll('.btn');
const resultsDiv = document.querySelector('#results');
const matchResultDisplay = document.querySelector('.match-result-display');
const playerScoreDisplay = document.querySelector('.player-score-display');
const cpuScoreDisplay = document.querySelector('.cpu-score-display');
const selectionsDisplay = document.querySelector('.selections-display');
const matchScoreDisplay = document.querySelector('.match-score-display');
const gameResultDiv = document.querySelector('.game-result-div');
const gameResult = document.querySelector('.game-result');
const gameFinalScore = document.querySelector('.game-final-score');
const rematchBtn = document.querySelector('.rematch-btn');

const replayGame = () => {
  window.location.reload(true);
}

const playRound = (playerSelection, cpuSelection) => {  

  playerSelection = playerSelection.target.id
  cpuSelection = getComputerSelection();
  console.log(playerSelection);
  console.log(cpuSelection);
    
   
     if (playerScore < 5 || cpuScore < 5) {
      if (playerSelection !== cpuSelection) {
      if (playerSelection === "rock" && cpuSelection === "scissors" ||
        playerSelection === "scissors" && cpuSelection === "paper" ||
        playerSelection === "paper" && cpuSelection === "rock"
    ) {
      playerScore++;
  matchResultDisplay.textContent = `You Win !!! `
   selectionsDisplay.textContent = `${playerSelection} beats ${cpuSelection}`
   matchScoreDisplay.textContent = `Player: ${playerScore} CPU: ${cpuScore}`
  
}

else if (playerSelection === "rock" && cpuSelection === "paper" ||
        playerSelection === "scissors" && cpuSelection === "rock" ||
        playerSelection === "paper" && cpuSelection === "scissors") {
  cpuScore++;
  matchResultDisplay.textContent = `You Lose !!! `
   selectionsDisplay.textContent = `${cpuSelection} beats ${playerSelection}`
   matchScoreDisplay.textContent = `Player: ${playerScore} CPU: ${cpuScore}`
  
}

  }
  
else {
  
  matchResultDisplay.textContent = `It's a tie ! `
  selectionsDisplay.textContent = `${cpuSelection} VS ${playerSelection}`
   matchScoreDisplay.textContent = `Player: ${playerScore} CPU: ${cpuScore}`
}
    } else {
       return
    } 
    if(playerScore == 5) {
      gameResultDiv.style.display = 'flex';
      gameResult.textContent = `You win !!
      🙌
      `
      gameFinalScore.textContent = `Player: ${playerScore} CPU: ${cpuScore}`
    } if (cpuScore == 5) {
      gameResultDiv.style.display = 'flex';
       gameResult.textContent = `You lose...
       😔
      `
      gameFinalScore.textContent = `Player: ${playerScore} CPU: ${cpuScore}`
    }
    return
  }

btns.forEach(btn => {
 if(playerScore === 5 || cpuScore === 5) {
    btn.removeEventListener('click', playRound)
  }else{
    btn.addEventListener('click', playRound)};

}
)

rematchBtn.addEventListener('click', replayGame)
