const playerOnePickRock = event => {};

const playerOnePickPaper = event => {};

const playerOnePickScissors = event => {};

const playerTwoPickRock = event => {};

const playerTwoPickPaper = event => {};

const playerTwoPickScissors = event => {};

const main = () => {
  // remember that player 1 chose rock
  // log what player one choice is
  // log what player two choice is
  // check if both players have made a choice
  let playerOneRock = document.querySelector(".player-1 .rock");
  playerOneRock.addEventListener("click", playerOnePickRock);

  let playerOnePaper = document.querySelector(".player-1 .paper");
  playerOnePaper.addEventListener("click", playerOnePickPaper);

  let playerOneScissors = document.querySelector(".player-1 .scissors");
  playerOneScissors.addEventListener("click", playerOnePickScissors);

  let playerTwoRock = document.querySelector(".player-2 .rock");
  playerTwoRock.addEventListener("click", playerTwoPickRock);

  let playerTwoPaper = document.querySelector(".player-2 .paper");
  playerTwoPaper.addEventListener("click", playerTwoPickPaper);

  let playerTwoScissors = document.querySelector(".player-2 .scissors");
  playerTwoScissors.addEventListener("click", playerTwoPickScissors);
};

document.addEventListener("DOMContentLoaded", main);
