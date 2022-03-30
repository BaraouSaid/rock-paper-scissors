const gameArr = ["rock", "paper", "scissors"]

const computerPlay = () => {
  const randomIndex = Math.floor(Math.random() * gameArr.length);
  return gameArr[randomIndex];
}


let playerScore = 0;
let cpuScore = 0;
let score = `Player: ${playerScore} CPU: ${cpuScore}` 


const playRound = (playerSelection, cpuSelection) => {  
  playerSelection = window.prompt('enter rock, paper or scissors');
  cpuSelection = computerPlay();
  


  if(playerSelection === cpuSelection){
    console.log(`It's a tie
    Player: ${playerScore} - CPU: ${cpuScore}`)
  }else if(playerSelection === "paper" && cpuSelection === "rock" ||
            playerSelection === "rock" && cpuSelection === "scissors" ||
            playerSelection === "scissors" && cpuSelection === "paper")
  {
    if(playerSelection === "paper" && cpuSelection === "rock"){
      console.log("paper beats rock")
    }
    if(playerSelection === "rock" && cpuSelection === "scissors"){
      console.log("rock beats scissors")
    }
    if(playerSelection === "scissors" && cpuSelection === "paper"){
      console.log("scissors beats paper")
    }
    score = `Player: ${playerScore++} CPU: ${cpuScore}`
    console.log(`You win !! ${playerScore} - ${cpuScore}`)
  }else{
    if(playerSelection === "paper" && cpuSelection === "scissors"){
      console.log("scissors beats paper")
    }
    if(playerSelection === "scissors" && cpuSelection === "rock"){
      console.log("rock beats scissors")
    }
    if(playerSelection === "rock" && cpuSelection === "paper"){
      console.log("paper beats rock")
    }
    score = `Player: ${playerScore} CPU: ${cpuScore++}`
    console.log(`You lose !! ${playerScore} - ${cpuScore}`)
  }
    score = `Player: ${playerScore} CPU: ${cpuScore}`
}


const game = () => {
  for(let i = 0; i < 5; i++) {
    playRound();
  }
  if(playerScore > cpuScore) {
    console.log(`GAME SCORE: ${score} You win the game`);
  }else if(playerScore < cpuScore){
    console.log(`GAME SCORE: ${score} You lose the game`);
  }else{
    console.log(`GAME SCORE: ${score} Game is a tie`);
  }
}

game();
