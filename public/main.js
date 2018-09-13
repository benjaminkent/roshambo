let playerOneChoice = ""
let playerTwoChoice = ""

const playerOneClickRock = event => {
  playerOneChoice = "rock"
  console.log(playerOneChoice)
  console.log(playerTwoChoice)
}

const playerOneClickPaper = event => {
  playerOneChoice = "paper"
  console.log(playerOneChoice)
}

const playerOneClickScissors = event => {
  playerOneChoice = "scissors"
  console.log(playerOneChoice)
}

const playerTwoClickRock = event => {
  playerTwoChoice = "rock"
  console.log(playerTwoChoice)
}

const playerTwoClickPaper = event => {
  playerTwoChoice = "paper"
  console.log(playerTwoChoice)
}

const playerTwoClickScissors = event => {
  playerTwoChoice = "scissors"
  console.log(playerTwoChoice)
}

const main = () => {
  // remember that player 1 chose rock
  // log what player one choice is
  // log what player two choice is
  // check if both players have made a choice
  let playerOneRock = document.querySelector(".player-1 .rock")
  playerOneRock.addEventListener("click", playerOneClickRock)

  let playerOnePaper = document.querySelector(".player-1 .paper")
  playerOnePaper.addEventListener("click", playerOneClickPaper)

  let playerOneScissors = document.querySelector(".player-1 .scissors")
  playerOneScissors.addEventListener("click", playerOneClickScissors)

  let playerTwoRock = document.querySelector(".player-2 .rock")
  playerTwoRock.addEventListener("click", playerTwoClickRock)

  let playerTwoPaper = document.querySelector(".player-2 .paper")
  playerTwoPaper.addEventListener("click", playerTwoClickPaper)

  let playerTwoScissors = document.querySelector(".player-2 .scissors")
  playerTwoScissors.addEventListener("click", playerTwoClickScissors)
}

document.addEventListener("DOMContentLoaded", main)
