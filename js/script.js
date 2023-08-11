//  Initialize the game:
//     Create an array of card types (e.g., images)
const cardArray = [
"images/Burrito.png", "images/Fries.png", "images/Hamburger.png",
"images/Pasta.png", "images/Pizza.png", "images/VeggieSoup.png"
];
const backCard = ["images/BackCard.png"]// backcard]
const blankCard = ["images/Blank.png"]// blankcard
// console.log(cardArray)

//    create pairs of images 
const pairs = cardArray.concat(cardArray)
// console.log(pairs)

// shuffleArray(pairs);
pairs.sort(() => 0.5 - Math.random());

//    Create the game variables
const display = document.querySelector('#gameBoard')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

//Create a timer of 60secs
const timerElement = document.getElementById('timer');
let seconds = 60;
let timerInterval;

//update timer
function updateTimer() {
  timerElement.textContent = seconds;

  if (seconds <= 0) {
    clearInterval(timerInterval);
    addMessageToShoutbox("Time's up!"); 
   showPlayAgainButton();
  } else {
  seconds--;
  }
}
//stop timer
function stopTimer() {
  clearInterval(timerInterval);
}
// variable to check if the time has started
let isTimerStarted = false

 // create board
function gameBoard () {
  for (let i = 0; i < 12; i++) {
  const card = document.createElement('img')
    card.setAttribute('src', backCard[0])
    card.setAttribute('data-id', i)
    // add event listener
    card.addEventListener('click', flipCard)
    display.appendChild(card)
  }
  

}


gameBoard();

//game logic match/mismatch etc
function checkMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]

  console.log('Check for a match!')
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', backCard[0])
    cards[optionTwoId].setAttribute('src', backCard[0])
    addMessageToShoutbox('You clicked the same card!')
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    addMessageToShoutbox('You found a match!')
    cards[optionOneId].setAttribute('src', blankCard[0])
    cards[optionTwoId].setAttribute('src', blankCard[0])
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)

  } else {
    cards[optionOneId].setAttribute('src', backCard[0])
    cards[optionTwoId].setAttribute('src', backCard[0])
    addMessageToShoutbox('Try again!')
  } 

  //when the game is won
  resultDisplay.textContent = cardsWon.length
  cardsChosen = []
  cardsChosenIds = []
  if (cardsWon.length == pairs.length/2) {
    resultDisplay.textContent = 'Congratulations you matched them all!'
    stopTimer();
    showPlayAgainButton();
  }
}



//fliping card
function flipCard() {
  if (!isTimerStarted) {
    timerInterval = setInterval(updateTimer, 1000);
    isTimerStarted = true;
  }

  
  const cardId = this.getAttribute('data-id')
  cardsChosen.push(pairs[cardId])
  cardsChosenIds.push(cardId)
  // console.log(cardsChosen)
  // console.log(cardsChosenIds)
  this.setAttribute('src', pairs[cardId])

  
  //checking for matches
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500)
  }
  
}



// Play Again Button logic
const playAgainButton = document.getElementById('playAgain');
playAgainButton.addEventListener('click', resetGame);

function showPlayAgainButton() {
  playAgainButton.style.display = 'block';
}

if (seconds <= 0) {
  clearInterval(timerInterval);
  addMessageToShoutbox("Time's up!"); 
  showPlayAgainButton();
}

function hidePlayAgainButton() {
  playAgainButton.style.display = 'none';
}

/// reset logic
function resetGame() {
    // Reset timer
    clearInterval(timerInterval);
    seconds = 60;
    
    // Clear game board
    display.innerHTML = '';
    
    // Clear result display
    resultDisplay.textContent = '0';
    
    // Reset game variables
    cardsChosen = [];
    cardsChosenIds = [];
    cardsWon.length = 0; // Clear the array
    
    // Shuffle and recreate pairs
    pairs.sort(() => 0.5 - Math.random());
    
    // Recreate the game board
    gameBoard();
    hidePlayAgainButton();
    

      timerInterval = setInterval(updateTimer, 1000);
  
    
}

function addMessageToShoutbox(message) {
  const shoutbox = document.getElementById('shout-messages');
  const messageItem = document.createElement('li');
  messageItem.textContent = message;
  shoutbox.appendChild(messageItem);

  //remove the shout after 2 secs
  setTimeout(() => {
    shoutbox.removeChild(messageItem);
  }, 2000);
}





