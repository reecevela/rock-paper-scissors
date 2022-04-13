const cDefaultMessage = 'The Computer is waiting for you';
const cChoseMessage = 'The Computer chose';

let pChoice = "";
let cChoice = "";
let pMessage = "";

function pChoose(choice) {
    pChoice = choice;
    const pMessage = document.getElementById("p-message");

    pMessage.textContent = `You chose ${pChoice}`;
    alert(pMessage.textContent +  `\n (Press Enter or Ok)`);
    cChoose();
    displayWinner();
}

function cChoose() {
  const message = document.getElementById('c-message');

  cChoice = pickRandomOfThree();
  message.textContent = cChoseMessage + " " + cChoice;
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

function resetRound(){


function pChoose(choice) {
    pChoice = choice;
    document.getElementById("p-message").textContent = `You chose ${pChoice}`;
    cChoose();
}

function cChoose() {
  const message = document.getElementById('c-message');
  let cChoice = '';

  switch (pChoice) {
    case 'rock':
      cChoice = ' paper';
      break;
    case 'paper':
      cChoice = ' scissors';
      break;
    case 'scissors':
      cChoice = ' rock';
  }

  message.textContent = cChoseMessage + cChoice;
}

