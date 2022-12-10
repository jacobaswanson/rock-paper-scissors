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
}