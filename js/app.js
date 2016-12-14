// /* Pseudo Code
// -The aim of the project is to create a memory game of flipping tiles to be paired against time. The game will have three different levels of difficulty (easy, medium, hard) and the option to compete against a friend.
// -The game board will be a 6X6 grid and the tiles will have pictures of cartoon characters and associated sounds.
// -The player will have to click on the difficulty level to start the game or click to play against another player.
// -On start will have to click on  each tile/card to flip them and reveal a picture to pair it with another tile with the same picture on it.
// -If the pair is successfull the tiles with the paired pictures will disappear until no tiles remain in the board.
// -If the pair is unsuccesful the tiles will flip back to their original status.
// -If single play is selected  the player will have a set time to finish the game, when the time is finished the play is halted.
// -If the player goes against another player there won't be any time limit and the player that finishes first will win.
// -BASIC GAME:
// -create a 6 x 6 grid to display the game board.
// -each cell of the grid corresponds to one of cards face down.
// -create an array of images
// -assign a pair of each picture to the cards array for a total of 36 pictures
// -assign each picture randomly to each square of the game board
// - win logic: if the players clicks and pairs two equal images alert player
// - alert('pair matched')
// - if the players clicks on two different images alert message ('no match')
// -the user should be able to click on only two different cards each play.
// -the cards should flip on click.
// -the cards with the same picture are 'paired' and should disappear from the board
// -the cards that are not paired should flip back and available to be clicked again
// -The game is finished when all cards are cleared from the board
// COMPLICATIONS:
// -add a timer to the game
// -the player will have to clear the board in a set time
// -the last ten seconds the timer will pulse red
// -once the time has ran out the game will stop and a 'game over' message will appear on the screen
// -add 'easy', 'medium', 'hard' levels of difficulty
// -add the option of two player playing gainst each other
// -add sounds to play when cards are paired
// -display a winning message at the end of the game
// -add a counter to keep track of best times, how many games won and how many games lost.
// -finally style the page
//
// */


// this function will toggle the instruction menu

$(document).ready(function(){
  $('#inst').click(function(){
    $('p').slideToggle(1200);
  });
});

// created the Game object

var Game = Game || {};

Game.cardImages = [
  'Bart1',
  'Bart2',
  'Brian1',
  'Brian2',
  'Cleveland',
  'Fredflinstone',
  'Homer2',
  'Homers1',
  'PeterG',
  'PeterG2',
  'Popeye',
  'Quagmire3',
  'Quagmire4',
  'Roger1',
  'Roger2',
  'Rollo',
  'Stewie',
  'Stewie2'
];

Game.chosenCards = [];

Game.twoCardsChosen = function twoCardsChosen() {
  return Game.chosenCards.length === 2;
};

Game.compareCards = function compareCards() {
  var firstCard  = Game.chosenCards[0];
  var secondCard = Game.chosenCards[1];

  return firstCard.children('.back').css('background-image') === secondCard.children('.back').css('background-image');
};

Game.selectCard = function selectCard() {
  // The card we chose
  var card = $(this);
  // Store the card for later use...
  Game.chosenCards.push(card);


  // Find the index of that card from the cardsArray
  var indexOfSquare = Game.cardsArray.indexOf(this);
  // Choose the corresponding image from this.deck using the same index
  var image         = Game.deck[indexOfSquare];
  // Add the image to the .back of the card that we chose
  var imageUrl      = './images/' + image + '.jpeg';
  card.children('.back').css('background-image', 'url("'+imageUrl+'")');
  console.log(imageUrl);
  // Flip the card
  card.toggleClass('flipped');
  // Remove the eventListener so we can't click on it again
  card.off('click', this.selectCard);

  if (!Game.twoCardsChosen()) {
    // Only one card has been clicked
    return false;
    // Check for a match
  } else if (Game.twoCardsChosen() && Game.compareCards()) {
    // this function will make the paired cards disappear
    Game.chosenCards.forEach(function(chosenCard) {
      setTimeout(function(){
        chosenCard.empty('slow');
      }, 1000);
    });

    Game.chosenCards = [];

  } else {
    // No match
    Game.chosenCards.forEach(function(chosenCard) {
      setTimeout(function(){
        chosenCard.toggleClass('flipped');
        chosenCard.css('background-image', 'none');
        // Re-adding the click eventHandler
        chosenCard.on('click', Game.selectCard);
      }, 1500);
      Game.chosenCards = [];
    });
  }
};

Game.dealCards = function dealCards() {
  var i = 0;
  for (i; i < this.deck.length; i++) {
    var $card = $('<div class="card"><div class="front"></div><div class="back"></div></div>');

    this.$board.append($card);
  }
  // Select all of the cards that we added to the board
  this.$cards = $('.card');
  // Convert the HTMLCollection to an array (so we can use .indexOf)
  this.cardsArray = [].slice.call(this.$cards);
  // Add a click eventListener to the card
  this.$cards.on('click', this.selectCard);
};

Game.shuffle = function shuffle() {
  // Create an array with 2 of each image using concatenation
  var array = this.cardImages.concat(this.cardImages);
  // Shuffle this array with the Durstenfeld shuffle algorithm
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

Game.start = function start() {
  this.base   = 6;
  this.$body  = $('body');
  this.$board = $('<div class="board"></div>');
  this.$body.append(this.$board);
  this.deck   = this.shuffle();
  this.dealCards();
};

$(Game.start.bind(Game));
