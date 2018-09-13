let playerOneChoice = ''
let playerTwoChoice = ''

const winnerDeclared = () => {
  let winDeclareStatement = document.querySelector('h3')

  if (playerOneChoice !== '' && playerTwoChoice !== '') {
    if (playerOneChoice === 'rock' && playerTwoChoice === 'rock') {
      winDeclareStatement.textContent = 'There is a tie!'
    }
    if (playerOneChoice === 'rock' && playerTwoChoice === 'paper') {
      winDeclareStatement.textContent = 'Player Two Wins!'
    }
    if (playerOneChoice === 'rock' && playerTwoChoice === 'scissors') {
      winDeclareStatement.textContent = 'Player One Wins!'
    }
    if (playerOneChoice === 'paper' && playerTwoChoice === 'rock') {
      winDeclareStatement.textContent = 'Player One Wins!'
    }
    if (playerOneChoice === 'paper' && playerTwoChoice === 'paper') {
      winDeclareStatement.textContent = 'There is a tie!'
    }
    if (playerOneChoice === 'paper' && playerTwoChoice === 'scissors') {
      winDeclareStatement.textContent = 'Player Two Wins!'
    }
    if (playerOneChoice === 'scissors' && playerTwoChoice === 'rock') {
      winDeclareStatement.textContent = 'Player Two Wins!'
    }
    if (playerOneChoice === 'scissors' && playerTwoChoice === 'paper') {
      winDeclareStatement.textContent = 'Player One Wins'
    }
    if (playerOneChoice === 'scissors' && playerTwoChoice === 'scissors') {
      winDeclareStatement.textContent = "There is a tie!"
    }
  }

  if (playerOneChoice !== '' && playerTwoChoice !== '') {
    document.querySelector('.replay').classList.add('add-replay')
  }
}

const playerOneClickRock = event => {
  playerOneChoice = 'rock'
  document.querySelector('.player-1').classList.add('remove-choices')
  winnerDeclared()

}

const playerOneClickPaper = event => {
  playerOneChoice = 'paper'
  document.querySelector('.player-1').classList.add('remove-choices')
  winnerDeclared()
}

const playerOneClickScissors = event => {
  playerOneChoice = 'scissors'
  document.querySelector('.player-1').classList.add('remove-choices')
  winnerDeclared()
}

const playerTwoClickRock = event => {
  playerTwoChoice = 'rock'
  document.querySelector('.player-2').classList.add('remove-choices')
  winnerDeclared()
}

const playerTwoClickPaper = event => {
  playerTwoChoice = 'paper'
  document.querySelector('.player-2').classList.add('remove-choices')
  winnerDeclared()
}

const playerTwoClickScissors = event => {
  playerTwoChoice = 'scissors'
  document.querySelector('.player-2').classList.add('remove-choices')
  winnerDeclared()
}

const main = () => {
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

  document.querySelector('footer button').addEventListener('click', () => {
    document.location = '/'
  })
}

document.addEventListener('DOMContentLoaded', main)
