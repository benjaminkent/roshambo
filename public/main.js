const main = () => {
  document
    .querySelector(".player-one-rock-button")
    .addEventListener("click", event => {
      console.log("player one rock");
    });

  document
    .querySelector(".player-one-paper-button")
    .addEventListener("click", event => {
      console.log("player 1 paper");
    });

  document
    .querySelector(".player-one-scissors-button")
    .addEventListener("click", event => {
      console.log("player one scissors");
    });

  document
    .querySelector(".player-two-rock-button")
    .addEventListener("click", event => {
      console.log("player two rock");
    });

  document
    .querySelector(".player-two-paper-button")
    .addEventListener("click", event => {
      console.log("player 2 paper");
    });

  document
    .querySelector(".player-two-scissors-button")
    .addEventListener("click", event => {
      console.log("player 2 scissors");
    });
};

document.addEventListener("DOMContentLoaded", main);
