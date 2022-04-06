const cDefaultMessage = 'The Computer is waiting for you';
const cChoseMessage = 'The Computer chose';

let pChoice = "";

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

