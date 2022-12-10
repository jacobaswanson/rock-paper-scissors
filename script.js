function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    var rand = Math.random();
    rand *= options.length;
    rand = Math.floor(rand);
    const selection = options[rand];
    return selection;
}

function getUserChoice(){
    const selection = prompt("Enter your choice; Rock, Paper or Scissors: ");
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
    console.log(userChoice);
    console.log(result);
    return result;
}

function game(){
    let wins = 0;
    let losses = 0;
    for(let i = 0; i < 5; i++){
        let roundResult = playRound();
        console.log(`Play round: ${roundResult}`)
        if(roundResult === 0){
            losses += 1;
            console.log(`Ouch, you lost. Current Score: ${wins} - ${losses}`)
        }else if(roundResult === 1){
            wins += 1;
            console.log(`Nice! you won! Current Score: ${wins} - ${losses}`)
        }else if(roundResult === 2){
            console.log(`You tied!!!! Current Score: ${wins} - ${losses}`)
        }
    }
}

game();