// 1. Initialize the game:
//    - Create an array of card types (e.g., images)
const cardArray = [
"images/Burrito.png", "images/Fries.png", "images/Hamburger.png",
"images/Pasta.png", "images/Pizza.png", "images/VeggieSoup.png"
];
const backCard = ["images/BackCard.png"]// backcard]
const blankCard = ["images/Blank.png"]// blankcard
// console.log(cardArray)

//    -create pairs of images 
const pairs = cardArray.concat(cardArray)
// console.log(pairs)

// shuffleArray(pairs);
pairs.sort(() => 0.5 - Math.random());

//    - Create the game variables
const display = document.querySelector('#gameBoard')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []


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

//check for match message
function checkMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]

  console.log('Check for a match!')
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', backCard[0])
    cards[optionTwoId].setAttribute('src', backCard[0])
    alert('You clicked the same card!')
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert('You found a match!')
    cards[optionOneId].setAttribute('src', blankCard[0])
    cards[optionTwoId].setAttribute('src', blankCard[0])
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)

  } else {
    cards[optionOneId].setAttribute('src', backCard[0])
    cards[optionTwoId].setAttribute('src', backCard[0])
    alert('Try again!')
  } 


  resultDisplay.textContent = cardsWon.length
  cardsChosen = []
  cardsChosenIds = []

  if (cardsWon.length == pairs.length/2) {
    resultDisplay.textContent = 'Congratulations you match them all!'
  }
}

//fliping card
function flipCard() {
  const cardId = this.getAttribute('data-id')
  cardsChosen.push(pairs[cardId])
  cardsChosenIds.push(cardId)
  console.log(cardsChosen)
  console.log(cardsChosenIds)
  this.setAttribute('src', pairs[cardId] )

  //checking for matches/mismatches
  if (cardsChosen.length === 2) {
  setTimeout(checkMatch, 500)
  }
}

 

// 2. Handle card clicks:
//    - Add click event listeners to each card element

//    - When a card is clicked:
//      - If the card is already flipped or matched, do nothing
//      - Flip the card to reveal its image

//      - Increment the flipped card count
//      - If two cards are flipped:
//        - Check if they match:
//          - If they match, increment the matched pair count
//          - If they don't match, wait a short delay, then flip them back
//        - Reset the flipped card count to zero

// 3. Check for game completion:
//    - If the matched pair count equals the number of card types, the game is won

// 4. Display game status:
//    - Show the flipped cards with their images
//    - Show the matched pairs
//    - Display the current game status (flipped cards count, matched pairs count)

// 5. Reset the game:
//    - Shuffle the card types again
//    - Reset the game board, flipped card count, and matched pair count
//    - Hide all card images

// 6. Optional:
//    - Add a timer to track the player's time
//    - Add a scoring system based on time taken and attempts made
//    - Add animations and transitions for card flipping and matching

// 7. Display end game:
//    - When the game is won, show a congratulatory message with the player's time and score

// 8. Restart the game:
//    - Allow the player to restart the game, resetting all game variables and the game board

// 9. Handle UI interactions:
//    - Create HTML elements for the game board, cards, and game status
//    - Apply CSS to style the game components

// 10. Test and Debug:
//     - Test the game for different scenarios and edge cases
//     - Debug any issues that arise during testing


