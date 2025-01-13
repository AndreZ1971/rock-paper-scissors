// main.js

// Elemente aus dem DOM abrufen
const startButton = document.getElementById('startbutton');
const startscreen = document.getElementById('startscreen');
const mainGame = document.querySelector('.main');
const rules = document.getElementById('rules');
const closeButton = document.getElementById('closebutton');
const results = document.getElementById('results');
const userChoiceDiv = document.getElementById('userchoice');
const computerChoiceDiv = document.getElementById('computerchoice');
const resultText = document.getElementById('result');
const playAgainButton = document.getElementById('playagain');
const scoreElement = document.getElementById('score');

// Initialer Punktestand
let score = 0;

// Startbildschirm verstecken und das Spiel starten
startButton.addEventListener('click', () => {
  startscreen.style.display = 'none';
  mainGame.style.display = 'flex';
});

// Regeln schließen und das Spiel anzeigen
closeButton.addEventListener('click', () => {
  rules.style.display = 'none';
  mainGame.style.display = 'flex'; // Zeige das Spiel-Fenster
});

// Spiel-Logik
const choices = ['rock', 'paper', 'scissors'];

document.querySelectorAll('button[data-choice]').forEach((button) => {
  button.addEventListener('click', () => {
    const userChoice = button.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = determineWinner(userChoice, computerChoice);

    displayResults(userChoice, computerChoice, result);
  });
});

function determineWinner(user, computer) {
  if (user === computer) return 'draw';
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    score++;
    return 'win';
  } else {
    return 'lose';
  }
}

function displayResults(userChoice, computerChoice, result) {
  // Benutzer- und Computerauswahl aktualisieren
  userChoiceDiv.innerHTML = `<img src="/image/${userChoice}.svg" alt="${userChoice}" class="result-icon" />`;
  computerChoiceDiv.innerHTML = `<img src="/image/${computerChoice}.svg" alt="${computerChoice}" class="result-icon" />`;

  // Ergebnistext anzeigen
  resultText.textContent =
    result === 'win'
      ? 'You Win!'
      : result === 'lose'
      ? 'You Lose!'
      : "It's a Draw!";

  // Schriftart und Stil anwenden
  resultText.className = result === 'win' ? 'text-win' : result === 'lose' ? 'text-lose' : 'text-draw';

  // Punktestand aktualisieren
  scoreElement.textContent = score;

  // Fenster wechseln
  mainGame.style.display = 'none';
  results.style.display = 'flex';
  results.style.justifyContent = 'center';
  results.style.alignItems = 'center';
}

// Erneut spielen
playAgainButton.addEventListener('click', () => {
  results.style.display = 'none';
  mainGame.style.display = 'flex';
});
