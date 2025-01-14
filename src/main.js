// main.js

const startScreen = document.getElementById("startscreen");
const startButton = document.getElementById("startbutton");
const scoreElement = document.getElementById("score");
const results = document.getElementById("results");
const userChoiceDiv = document.getElementById("userchoice");
const computerChoiceDiv = document.getElementById("computerchoice");
const resultText = document.getElementById("result");
const playAgainButton = document.getElementById("playagain");

let score = 0;

function startGame() {
  startScreen.classList.add("hidden");
  document.querySelector(".main").classList.remove("hidden");
}

startButton.addEventListener("click", startGame);

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(playerChoice, computerChoice) {
  const outcomes = {
    rock: { rock: "draw", paper: "lose", scissors: "win" },
    paper: { rock: "win", paper: "draw", scissors: "lose" },
    scissors: { rock: "lose", paper: "win", scissors: "draw" },
  };
  return outcomes[playerChoice][computerChoice];
}

function updateUI(userChoice, computerChoice, result) {
  userChoiceDiv.innerHTML = `<img src="/image/${userChoice}.svg" alt="${userChoice}" class="result-icon">`;
  computerChoiceDiv.innerHTML = `<img src="/image/${computerChoice}.svg" alt="${computerChoice}" class="result-icon">`;

  resultText.textContent =
    result === "win"
      ? "You Win!"
      : result === "lose"
      ? "You Lose!"
      : "It's a Draw!";

  if (result === "win") score++;
  scoreElement.textContent = score;

  document.querySelector(".main").classList.add("hidden");
  results.classList.remove("hidden");
}

const choiceButtons = document.querySelectorAll("button[data-choice]");
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    updateUI(userChoice, computerChoice, result);
  });
});

playAgainButton.addEventListener("click", () => {
  results.classList.add("hidden");
  document.querySelector(".main").classList.remove("hidden");
});
