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

function playRound(userChoice, computerChoice){
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
    return result;
}

function game(){
    let wins = 0;
    let losses = 0;
    for(let i = 0; i < 5; i++){
        let userChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        let roundResult = playRound(userChoice, computerChoice);
        console.log(`You chose ${userChoice} and the computer chose ${computerChoice}`)
        if(roundResult === 0){
            losses += 1;
            console.log(`Ouch, you lost that round. Current Score: ${wins} - ${losses}`)
        }else if(roundResult === 1){
            wins += 1;
            console.log(`Nice! You won that round! Current Score: ${wins} - ${losses}`)
        }else if(roundResult === 2){
            console.log(`You tied that round. Current Score: ${wins} - ${losses}`)
        }
    }
    if(wins > losses){
        console.log(`Nice job! You won the game with a final score of ${wins} - ${losses}!`);
    }else if(losses > wins){
        console.log(`Dang... the computer won with a final score of ${wins} - ${losses}. Better luck next time!`);
    }else{
        console.log(`It's a tie! Final Score: ${wins} - ${losses}`);
    }

}
game();