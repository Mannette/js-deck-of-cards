var showCards = document.getElementById("cards");

showCards.onclick = function(){
  var cardContainer = document.getElementById('container');
  cardContainer.innerHTML = "";
  displayCards();
};

function displayCards(){
  var deck = newDeck();
  var shuffledCards = shuffleCards(deck);

  for(var i=0; i < deck.length; i++){
    var card = document.createElement('div');
    card.className = "card";
    var cardContainer = document.getElementById('container');
    cardContainer.appendChild(card);
    card.style.backgroundImage = "url(images/" + shuffledCards[i].suit + "-" + shuffledCards[i].card + ".png" + ")";

  }

  document.getElementById("reset").style.visibility = 'visible';
}

function reset(){
document.getElementById("container").innerHTML = "";
document.getElementById("reset").style.visibility = "hidden";
}



// Creates a deck of 52 cards
function newDeck(){

  var ranks = [
    {card:"a"},
    {card:"2"},
    {card:"3"},
    {card:"4"},
    {card:"5"},
    {card:"6"},
    {card:"7"},
    {card:"8"},
    {card:"9"},
    {card:"10"},
    {card:"j"},
    {card:"q"},
    {card:"k"}
  ];

  var suits = [ "d", "c", "s", "h"];
  var deck = [];

  for (i = 0; i <= ranks.length-1; i++) {
    for (j = 0; j <= suits.length-1; j++) {
      // console.log(ranks[i].suit = suits[j]);
      // ranks[i].suit = suits[j];
      // var temp = ranks[i];
      // console.log(temp);
      // deck.push(temp);

      deck.push({
        card: ranks[i].card,
        suit: suits[j]
      });
    }
  }
  return deck;
}

// Shuffles the Deck
function shuffleCards(cardDeck){
  var m = cardDeck.length;
  while (m) {
    var r = Math.floor(Math.random()*m--);
    var p = cardDeck[m];
    cardDeck[m] = cardDeck[r];
    cardDeck[r] = p;
  }
  return cardDeck;
}




console.log(newDeck());
