let playerOneChoice = ''
let playerTwoChoice = ''

const playerOneClickRock = event => {
  let winDeclareStatement = document.querySelector('h3')
  playerOneChoice = 'rock'
  // if player one and player two make a choice. something happens
  if (playerOneChoice !== '' && playerTwoChoice !== '') {
    // if player one choose rock and player two choose rock than there is a tie
    if (playerOneChoice === 'rock' && playerTwoChoice === 'rock') {
      winDeclareStatement.textContent = 'There is a tie!'
    }
    // if player one choose rock and player two choose paper than player two wins
    if (playerOneChoice === 'rock' && playerTwoChoice === 'paper') {
      winDeclareStatement.textContent = 'Player Two Wins!'
    }
    // if player one choose rock and player two choose scissors than player one wins
    if (playerOneChoice === 'rock' && playerTwoChoice === 'scissors') {
      winDeclareStatement.textContent = 'Player One Wins!'
    }
    // if player one choose paper and player two choose rock than player one wins
    if (playerOneChoice === 'paper' && playerTwoChoice === 'rock') {
      winDeclareStatement.textContent = 'Player One Wins!'
    }
    // if player one choose paper and player two choose paper than there is a tie
    if (playerOneChoice === 'paper' && playerTwoChoice === 'paper') {
      winDeclareStatement.textContent = 'There is a tie!'
    }
    // if player one choose paper and player two choose scissors than player player two wins
    if (playerOneChoice === 'paper' && playerTwoChoice === 'scissors') {
      winDeclareStatement.textContent = 'Player Two Wins!'
    }
    // if player one choose scissors and player two choose rock than player two wins
    if (playerOneChoice === 'scissors' && playerTwoChoice === 'rock') {
      winDeclareStatement.textContent = 'Player Two Wins!'
    }
    // if player one choose scissors and player two choose paper than player one wins
    if (playerOneChoice === 'scissors' && playerTwoChoice === 'paper') {
      winDeclareStatement.textContent = 'Player One Wins'
    }
    // if player one choose scissors and player two choose scissors than there is a tie
    if (playerOneChoice === 'scissors' && playerTwo === 'scissors') {
      winDeclareStatement.textContent = "There is a tie!"
    }
  }
}

const playerOneClickPaper = event => {
  playerOneChoice = 'paper'
}

const playerOneClickScissors = event => {
  playerOneChoice = 'scissors'
}

const playerTwoClickRock = event => {
  playerTwoChoice = 'rock'
}

const playerTwoClickPaper = event => {
  playerTwoChoice = 'paper'
}

const playerTwoClickScissors = event => {
  playerTwoChoice = 'scissors'
}

const main = () => {
  // remember that player 1 chose rock
  // log what player one choice is
  // log what player two choice is
  // check if both players have made a choice
  let playerOneRock = document.querySelector('.player-1 .rock')
  playerOneRock.addEventListener('click', playerOneClickRock)

  let playerOnePaper = document.querySelector('.player-1 .paper')
  playerOnePaper.addEventListener('click', playerOneClickPaper)

  let playerOneScissors = document.querySelector('.player-1 .scissors')
  playerOneScissors.addEventListener('click', playerOneClickScissors)

  let playerTwoRock = document.querySelector('.player-2 .rock')
  playerTwoRock.addEventListener('click', playerTwoClickRock)

  let playerTwoPaper = document.querySelector('.player-2 .paper')
  playerTwoPaper.addEventListener('click', playerTwoClickPaper)

  let playerTwoScissors = document.querySelector('.player-2 .scissors')
  playerTwoScissors.addEventListener('click', playerTwoClickScissors)
}

document.addEventListener('DOMContentLoaded', main)
