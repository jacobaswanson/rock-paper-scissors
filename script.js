const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
const main = document.querySelector('#main');
const second = document.querySelector('#second');
const btndiv = document.querySelector('#btndiv');
var wins = 0;
var losses = 0;

rock.textContent = "I choose Rock!";
paper.textContent = "I choose Paper!";
scissors.textContent = "I choose Scissors!";

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});

btndiv.appendChild(rock);
btndiv.appendChild(paper);
btndiv.appendChild(scissors);

function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    var rand = Math.random();
    rand *= options.length;
    rand = Math.floor(rand);
    const selection = options[rand];
    return selection;
}

function playRound(userChoice, computerChoice){
    if(userChoice === 'rock'){
        if(computerChoice === 'rock'){
            second.textContent = `The computer also chose ${computerChoice}. It's a tie! Make another selection to continue playing.`
        }else if(computerChoice === 'paper'){
            losses++;
            second.textContent = `The computer chose ${computerChoice}. Bummer! You lost! Make another selection to continue playing.`
        }else if(computerChoice === 'scissors'){
            wins++;
            second.textContent = `The computer chose ${computerChoice}. Nice! You won! Make another selection to continue playing.`
        }
    }else if(userChoice === 'paper'){
        if(computerChoice === 'rock'){
            wins++;
            second.textContent = `The computer chose ${computerChoice}. Nice! You won! Make another selection to continue playing.`
        }else if(computerChoice === 'paper'){
            second.textContent = `The computer also chose ${computerChoice}. It's a tie! Make another selection to continue playing.`
        }else if(computerChoice === 'scissors'){
            losses++;
            second.textContent = `The computer chose ${computerChoice}. Bummer! You lost! Make another selection to continue playing.`
        }
    }else if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            losses++;
            second.textContent = `The computer chose ${computerChoice}. Bummer! You lost! Make another selection to continue playing.`
        }else if(computerChoice === 'paper'){
            wins++;
            second.textContent = `The computer chose ${computerChoice}. Nice! You won! Make another selection to continue playing.`
        }else if(computerChoice === 'scissors'){
            second.textContent = `The computer also chose ${computerChoice}. It's a tie! Make another selection to continue playing.`
        }
    }
    if(wins === 5){
        btndiv.removeChild(rock);
        btndiv.removeChild(paper);
        btndiv.removeChild(scissors);
        btndiv.textContent = 'Nice Job! You beat the computer!';
    }else if(losses === 5){
        btndiv.removeChild(rock);
        btndiv.removeChild(paper);
        btndiv.removeChild(scissors);
        btndiv.textContent = 'Darn! The computer beat you!';
    }
    main.textContent = `Wins: ${wins} Losses: ${losses}`;
    return;
}
