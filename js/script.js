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
//    - Shuffle the card types
function shuffleArray() {
    for (let i = pairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
    }
}

shuffleArray(pairs);
//    - Create an array to represent the game board

const rows = 3;
const cols = 4;
const gameBoard = new Array(rows);

for (let i = 0; i < rows; i++) {
  gameBoard[i] = new Array(cols);
  for (let j = 0; j < cols; j++) {
    gameBoard[i][j] = pairs[i * cols + j];
  }
}
//grab the div "gameBoard" from the html, display the game board images on the web page
const gameBoardContainer = document.getElementById("gameBoard");

for (const row of gameBoard) {
  const rowContainer = document.createElement("div");
  rowContainer.classList.add("game-row");

  for (const cardImage of row) {
    const cardElement = document.createElement("img");
    // Set the default image to the back card
    cardElement.src = backCard[0];

    
    cardElement.classList.add("card");
    rowContainer.appendChild(cardElement);
  }

  gameBoardContainer.appendChild(rowContainer);
}


 

// 2. Handle card clicks:
//    - Add click event listeners to each card element
const cardElements = document.querySelectorAll('.card')
//    - When a card is clicked:
//      - If the card is already flipped or matched, do nothing
//      - Flip the card to reveal its image

//      - Increment the flipped card count
//      - If two cards are flipped:
//        - Check if they match:
//          - If they match, increment the matched pair count
//          - If they don't match, wait a short delay, then flip them back
//        - Reset the flipped card count to zero
cardElements.forEach((cardElement, index) => {
    cardElement.addEventListener('click', () => {
      if (
        !cardElement.classList.contains('flipped') &&
        !cardElement.classList.contains('matched')
      ) {
        cardElement.classList.add('flipped');
        cardElement.src = pairs[index];
        handleCardClick(cardElement);
      }
    });
  });
  function handleCardClick(clickedCard) {
    if (flippedCards === 2) {
      const flippedCardsArray = Array.from(document.querySelectorAll('.flipped'));
      const [card1, card2] = flippedCardsArray;
  
      if (card1.src === card2.src) {
        // Cards match
        card1.classList.add('matched');
        card2.classList.add('matched');
        card1.src = blankCard[0]; // Set matched cards to the Blank.png image
        card2.src = blankCard[0];
        matchedPairs++;
  
        // Check if all pairs are matched (game over condition)
        if (matchedPairs === cardArray.length) {
          // Handle game over logic
          console.log('Game over!');
        }
  
        // Reset flipped cards count
        flippedCards = 0;
      } else {
        // Cards don't match
        setTimeout(() => {
          card1.classList.remove('flipped');
          card2.classList.remove('flipped');
          // Reset flipped cards count
          flippedCards = 0;
        }, 1000);
      }
    } else {
      flippedCards++;
    }
  }


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


