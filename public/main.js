const playerOneChooseRock = event => {
  console.log("rock");
};

const playerOneChoosePaper = event => {
  console.log("paper");
};

const playerOneChooseScissors = event => {
  console.log("scissors");
};

const playerTwoChooseRock = event => {
  console.log("rock");
};

const playerTwoChoosePaper = event => {
  console.log("paper");
};

const playerTwoChooseScissors = event => {
  console.log("scissors");
};

const main = () => {
  // remember that player 1 chose rock
  // log what player one choice is
  // log what player two choice is
  // check if both players have made a choice
  let playerOneRock = document.querySelector(".player-1 .rock");
  playerOneRock.addEventListener("click", playerOneChooseRock);

  let playerOnePaper = document.querySelector(".player-1 .paper");
  playerOnePaper.addEventListener("click", playerOneChoosePaper);

  let playerOneScissors = document.querySelector(".player-1 .scissors");
  playerOneScissors.addEventListener("click", playerOneChooseScissors);

  let playerTwoRock = document.querySelector(".player-2 .rock");
  playerTwoRock.addEventListener("click", playerTwoChooseRock);

  let playerTwoPaper = document.querySelector(".player-2 .paper");
  playerTwoPaper.addEventListener("click", playerTwoChoosePaper);

  let playerTwoScissors = document.querySelector(".player-2 .scissors");
  playerTwoScissors.addEventListener("click", playerTwoChooseScissors);
};

document.addEventListener("DOMContentLoaded", main);
