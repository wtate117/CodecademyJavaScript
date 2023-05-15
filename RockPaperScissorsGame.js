console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' ||userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error with input')
  }
};


function getComputerChoice() {
  let variable = Math.floor(Math.random() * 3);
  if(variable <=2/3) {
    return 'rock';
  } else if(variable <= 1.5) {
    return 'paper';
  } else {
    return 'scissors';
  }
};


function determineWinner(userChoice, computerChoice) {
  if(userChoice === 'bomb') {
    return 'user wins by being kinda annoying';
  }
  if(userChoice === computerChoice) {
    return('The game is a tie');
  }  
  if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return ('Computer wins');
      } else {
        return('User wins');
      }
  } else if(userChoice === 'paper') {
      if(computerChoice === 'rock') {
        return 'User wins';
    } else {
      return('Computer wins');
    }
  } else if(userChoice === 'scissors'){
      if(computerChoice === 'paper') {
        return 'user wins';
      } else {
        return 'computer wins';
      }
    
  } else {
    return 'iffy';
  }

};

function playGame() {
  const userChoice = getUserChoice('BOMB');
  computerChoice = getComputerChoice();
  console.log('user played ' + userChoice);
  console.log('the computer did ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  
};

playGame();
