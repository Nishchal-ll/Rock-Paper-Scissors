
const getUserChoice = (userInput) => {
  
    if( userInput === 'Rock' || userInput === 'Paper' || userInput === 'Scissors'){
      return userInput;
    }
    else{
      console.log('Error');
    }
    }
    
    const getComputerChoice = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
            case 0:
                return 'Rock';
            case 1:
                return 'Paper';
            case 2:
                return 'Scissors';
                 default:
                return 'Rock';
    }
    };
    
    const determineWinner = (userChoice,computerChoice) => {
       if (userChoice === computerChoice) {
        document.getElementById('winner').innerText =" Tie Game";
        } else if (
            (userChoice === 'Rock' && computerChoice === 'Scissors') ||
            (userChoice === 'Paper' && computerChoice === 'Rock') ||
            (userChoice === 'Scissors' && computerChoice === 'Paper')
        ) {
            document.getElementById('winner').innerText = "User Won";
        } else {
            document.getElementById('winner').innerText =" Computer Won";
        }
       
    }
    function playGame(value){
      var userChoice = getUserChoice(value);
      var computerChoice = getComputerChoice();
      document.getElementById('userChoice').innerText = `User's choice: ${userChoice}`;
      document.getElementById('computerChoice').innerText = `Computer's choice: ${computerChoice}`;
      
       determineWinner(userChoice,computerChoice);
    }
  
    function resetGame() {
  
    document.getElementById('userChoice').innerText = `User's choice: `;
    document.getElementById('computerChoice').innerText = `Computer's choice: `;
    document.getElementById('winner').innerText = `Result : `;
    
    }
  
