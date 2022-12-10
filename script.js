function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    var rand = Math.random();
    rand *= options.length;
    rand = Math.floor(rand);
    const selection = options[rand];
    return selection;
}

function getUserChoice(){
    const selection = prompt("Enter your choice; Rock, Paper or Scissors: ").toLowerCase;
    return selection;
}

function playRound(){
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    let result = 2;
    if(userChoice === 'rock'){
        if(computerChoice === 'rock'){
            result = 2;
        }else if(computerChoice === 'paper'){
            result = 0;
        }else if(computerChoice === 'scissors'){
            result = 1;
        }
    }else if(userChoice === 'paper'){
        if(computerChoice === 'rock'){
            result = 1;
        }else if(computerChoice === 'paper'){
            result = 2;
        }else if(computerChoice === 'scissors'){
            result = 0;
        }
    }else if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            result = 0;
        }else if(computerChoice === 'paper'){
            result = 1;
        }else if(computerChoice === 'scissors'){
            result = 2;
        }
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        let roundResult = playRound();
        let wins = 0;
        let losses = 0;
        if(roundResult = 0){
            
        }
    }
}