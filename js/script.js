
//make a card array to laydown all the 12 cards for the game
const cardArray = [
{
    name: 'burrito',
    Img: 'images/Burrito.png'
},
{
    name: 'fries',
    Img: 'images/fries.png'
},
{
    name: 'hamburger',
    Img: 'images/Hamburger.png'
},
{
    name: 'pasta',
    Img: 'images/Pasta.png'
},
{
    name: 'pizza',
    Img: 'images/Pizza.png'
},
{
    name: 'veggieSoup',
    Img: 'images/VeggieSoup.png'
},

{
    name: 'burrito',
    Img: 'images/Burrito.png'
},
{
    name: 'fries',
    Img: 'images/fries.png'
},
{
    name: 'hamburger',
    Img: 'images/Hamburger.png'
},
{
    name: 'pasta',
    Img: 'images/Pasta.png'
},
{
    name: 'pizza',
    Img: 'images/Pizza.png'
},
{
    name: 'veggieSoup',
    Img: 'images/VeggieSoup.png'
}

]
//get cards to sortout ramdomly 
cardArray.sort(() => 0.5 - Math.random())
// console.log(cardArray)

//grab the board
const gridDisplay = document.querySelector('#grid')
const cardsChosen = []
//create the board with a function
function board() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/BackCard.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

board()
//check for a match 
function checkMatch() {
    console.log('check for a match')
   if (cardsChosen[0] == cardsChosen[1]) {
    alert('You found a match')
   }
}

//make the cards flip over 
function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    this.setAttribute('src', cardArray[cardId].Img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}