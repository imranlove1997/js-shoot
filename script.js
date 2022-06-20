let playerOneScore = 0;
let playerTwoScore = 0;

let counter = 0

var playerOneHealth, playerTwoHealth;
playerOneHealth = 100;
playerTwoHealth = 100;

function startGame() {
var playerOne = Math.floor(Math.random() * 5);
var playerTwo = Math.floor(Math.random() * 5);


playerOneHealth = playerOneHealth - playerOne;
playerTwoHealth = playerTwoHealth - playerTwo;

counter++;
if(playerOneHealth == 0) {
document.getElementById('result').innerText = 'Player 2 Won';
}

if(playerTwoHealth == 0) {
document.getElementById('result').innerHTML = 'Player 1 Won';
}

if(counter == 5) {
document.querySelector('button').disabled = true;
document.querySelector('button').innerHTML = 'Game Over';
}

if(playerOne > playerTwo) {
playerOneScore = playerOneScore + 1;
}

if(playerTwo > playerOne) {
playerTwoScore = playerTwoScore + 1;
}

document.getElementById('player1').innerHTML = playerOneScore;
document.getElementById('player2').innerHTML = playerTwoScore;

if(playerOneScore == 3) {
	game('Player 1 Wonn!')
}
if(playerTwoScore == 3) {
	game('Player 2 Wonn!')
}

if(counter == 5) {
if(playerOneScore > playerTwoScore) {
game('Player 1 Won!')
}

if(playerTwoScore > playerOneScore) {
game('Player 2 Won!')
}
if(playerTwoScore == playerOneScore) {
game('Draw!')
}
}

}

function game(comment) {
document.getElementById('result').innerHTML = comment;
document.querySelector('button').disabled = true;
document.querySelector('button').innerHTML = 'Game Over';
}

function reset() {
    location.reload();
}