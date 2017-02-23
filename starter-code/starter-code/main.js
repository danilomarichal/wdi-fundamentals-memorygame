

var gameBoard = document.getElementById('game-board');
var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

function createBoard() {
	
	for (var i = 0; i<cards.length; i++) {
		

		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		gameBoard.appendChild(cardElement);
		cardElement.setAttribute('data-card', cards[i]);

		cardElement.addEventListener('click', isTwoCards);
		
        }
}
function shuffle(array) {
  'use strict';
  var i = 0,
     j = 0,
    temp = null;

  for (var i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
shuffle(cards);


function isMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert ("You found a match!")
	} else {
		alert ("Sorry, try again.");
	}
	this.innerHTML='';
}


function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="images/king.png" alt="King of Hearts"/>';
	} else {
		this.innerHTML = '<img src="images/queen.png" alt="Queen of Cups"/>';
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay=[];
	}
	
}
createBoard();

