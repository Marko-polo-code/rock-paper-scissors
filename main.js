console.log('hi');
const userInput = 'rock';

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if  (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('sorry, you need to pick rock, paper or scissors!');
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  switch(randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      return 'wrong number';
  }
};

console.log(`User choice: ${getUserChoice(userInput)}`);
const computerChoice = getComputerChoice();
console.log(`Computer choice: ${computerChoice}`);

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won!';
    } else {
      return 'The user won!';
    }
  };
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won!';
    } else {
      return 'The user won!';
    }
  };
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'The user won!';
    }
  }
}

console.log(determineWinner(getUserChoice(userInput), computerChoice));
