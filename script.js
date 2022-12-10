function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    var rand = Math.random();
    rand *= options.length;
    rand = Math.floor(rand);
    const selection = options[rand];
    return selection;
}

let computerSelection = getComputerChoice();
console.log(computerSelection);


function playRound(){

}