const CDEFAULTMESSAGE = 'The computer is waiting for you';
const CCHOSEMESSAGE = 'The computer chose';
const PDEFAULTMESSAGE = 'Choose One:'
const FINALSCORE = 3;

const playerSection = document.getElementById("p-message");
const computerSection = document.getElementById("c-message");

let pChoice = "";
let cChoice = "";
let pMessage = "";

let pScore = 0;
let cScore = 0;

function pChoose(choice) {
    pChoice = choice;
    const pMessage = document.getElementById("p-message");

    pMessage.textContent = `You chose ${pChoice}`;
    cChoose();
    displayWinner();
    updateScores();
    if (pScore >= FINALSCORE) {
      playerSection.style.backgroundColor = "rgb(0)";
      computerSection.style.backgroundColor = "rgb(0)";
      alert("Nice!");
      document.getElementById("rps").textContent = "YOU WON";
      delay(4000).then(() => resetGame())
    } else if (cScore >= FINALSCORE) {
      alert("You'll get it next time!");
      document.getElementById("rps").textContent = "YOU LOST";
      delay(4000).then(() => resetGame());
    }
}

function cChoose() {
  const message = document.getElementById('c-message');

  cChoice = pickRandomOfThree();
  message.textContent = `${CCHOSEMESSAGE} ${cChoice}`;
  

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
        return "There's a bug";
    }
  }
}

function displayWinner() {
  const winner = evaluateGame();

  switch (winner) {
    case "computer":
      ++cScore;
      playerSection.style.backgroundColor = "rgba(255,0,0,0.3)";
      computerSection.style.backgroundColor = "rgba(0,255,0,0.3)";
      break;
    case "player":
      ++pScore;
      playerSection.style.backgroundColor = "rgba(0,255,0,0.3)";
      computerSection.style.backgroundColor = "rgba(255,0,0,0.3)";
      break;
    default:
      playerSection.style.backgroundColor = "rgb(0)";
      computerSection.style.backgroundColor = "rgb(0)";
      break;
  }




  //alert(`Winner: ${winner} \n (Enter or Ok to play again)`);
  //Needs to display winner here using result

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
  document.getElementById("rps").textContent = "ROCK! PAPER! SCISSORS!";

  pScore = 0;
  cScore = 0;

  updateScores();

}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
