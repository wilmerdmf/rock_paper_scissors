let play = ["rock", "paper", "scissors"];

let randomNum = Math.floor(Math.random() * 3);
let result, playerChoice, computerChoice;

let computerPlay = () => {
  computerChoice = play[randomNum];
  return computerChoice;
};

let playerPlay = () => {
  playerChoice = prompt("Rock, Paper or Scissors?");
  playerChoice = playerChoice.toLocaleLowerCase();
  return playerChoice;
};

let playRound = (playerPlay, computerPlay) => {
  if (
    (playerPlay === "rock" && computerPlay === "scissors") ||
    (playerPlay === "paper" && computerPlay === "rock") ||
    (playerPlay === "scissors" && computerPlay === "paper")
  ) {
    result = 1;
    return result;
  }
  if (
    (computerPlay === "rock" && playerPlay === "scissors") ||
    (computerPlay === "paper" && playerPlay === "rock") ||
    (computerPlay === "scissors" && playerPlay === "paper")
  ) {
    result = 2;
    return result;
  }
  if (playerPlay === computerPlay) {
    result = 3;
    return result;
  }
  result = 4;
  return result;
};

playRound(playerPlay(), computerPlay());

switch (result) {
  case 1:
    document.write(`Your choice = ${playerChoice} 
    <br><br>Computer choice = ${computerChoice}
    <br><br>${playerChoice} beats ${computerChoice} so YOU win`);
    break;
  case 2:
    document.write(`Your choice = ${playerChoice} 
    <br><br>Computer choice = ${computerChoice}
    <br><br>${computerChoice} beats ${playerChoice} so COMPUTER wins`);
    break;
  case 3:
    document.write(`Your choice = ${playerChoice} 
    <br><br>Computer choice = ${computerChoice}
    <br><br>You chose just the same so NO ONE wins`);
    break;
  case 4:
    document.write(`You must write Rock, Paper or Scissors`);
    break;
}
