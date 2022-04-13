const CDEFAULTMESSAGE = 'The computer is waiting for you';
const CCHOSEMESSAGE = 'The computer chose';
const PDEFAULTMESSAGE = 'Choose One:'
const FINALSCORE = 3;

let pChoice = "";
let cChoice = "";
let pMessage = "";

let pScore = 0;
let cScore = 0;

function pChoose(choice) {
    pChoice = choice;
    const pMessage = document.getElementById("p-message");

    pMessage.textContent = `You chose ${pChoice}`;
    alert(pMessage.textContent +  `\n (Press Enter or Ok)`);
    cChoose();
    displayWinner();
    updateScores();
    if (pScore >= FINALSCORE) {
      alert("You WON!");
      alert("nice");
      resetGame();
    } else if (cScore >= FINALSCORE) {
      alert("The computer won.");
      alert(": (");
      resetGame();
    }
}

function cChoose() {
  const message = document.getElementById('c-message');

  cChoice = pickRandomOfThree();
  message.textContent = CCHOSEMESSAGE + " " + cChoice;
  alert(message.textContent + ` \n (Press Enter or Ok)`);

  function pickRandomOfThree(one = "rock", two = "paper", three = "scissors") {
    const randNum = Math.floor(Math.random()*3);
    switch (randNum) {
      case 0:
        return one;
      case 1:
        return two;
      case 2: 
        return three;
      default:
        return "There's a bug"
    }
  }
}

function displayWinner() {
  const winner = evaluateGame();

  switch (winner) {
    case "computer":
      ++cScore;
      break;
    case "player":
      ++pScore;
      break;
    default:
      break;
  }

  alert(`Winner: ${winner} \n (Enter or Ok to play again)`);

  function evaluateGame(){
    if (pChoice === cChoice) {
      return "tie";
    }
    switch (pChoice) {
      case "rock":
        switch (cChoice) {
          case "paper":
            return "computer";
          case "scissors":
            return "player"
        }
      case "paper":
        switch (cChoice) {
          case "rock":
            return "player";
          case "scissors":
            return "computer";
        }
      case "scissors":
        switch (cChoice) {
          case "paper":
            return "player";
          case "rock":
            return "computer";
        }
    }
  }
}

function updateScores(){
  const pScoreMessage = document.getElementById("p-score");
  const cScoreMessage = document.getElementById("c-score");

  pScoreMessage.textContent = "Player: " + pScore;
  cScoreMessage.textContent = "Computer: " + cScore;
}

function resetGame() {
  const computerMessage = document.getElementById('c-message');
  const playerMessage = document.getElementById('p-message');

  computerMessage.textContent = CDEFAULTMESSAGE;
  playerMessage.textContent = PDEFAULTMESSAGE;

  pScore = 0;
  cScore = 0;

  updateScores();

}