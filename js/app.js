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
  } else if (Game.twoCardsChosen() && Game.compareCards()) {
    Game.chosenCards.forEach(function(chosenCard) {
      setTimeout(function(){
        chosenCard.empty('slow');
      }, 1000);
    });
    // Check for a match
    //Play sounds
    // var audio = new Audio('./sounds/' + image + '.wav');
    // audio.play();
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
    });
    Game.chosenCards = [];
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
