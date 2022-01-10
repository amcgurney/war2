const suits = ["♥", "♦", "♠", "♣"]
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

const computerCardSlot = document.querySelector(".computer-card-slot");
const playerCardSlot = document.querySelector(".player-card-slot");
const text = document.querySelector(".text");
const startButton = document.querySelector(".start-button");
const dealButton = document.querySelector(".deal-button");
const playRoundButton = document.querySelector(".play-round-button");
const deck = [];
let computerDeck = document.querySelector(".computer-deck");
let playerDeck = document.querySelector(".player-deck");
let playerCard, computerCard;
let playerPile = [], computerPile = [];
let playerDiscardPile = [], computerDiscardPile = [];

playRoundButton.addEventListener("click", playRound);
startButton.addEventListener("click", startGame);  
dealButton.addEventListener("click", dealCards);




function startGame() {
    for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j < ranks.length; j++) {
            deck.push({
                suit: suits[i],
                rank: ranks[j],
                value: j +2            
            })
        }
    } 
    shuffle(), dealCards(), playRound();
}
startGame();

function playRound() {
        playerCard = playerPile.pop()
        computerCard = computerPile.pop()
        playerCardSlot.innerHTML = playerCard.suit + playerCard.rank;
        computerCardSlot.innerHTML = computerCard.suit + computerCard.rank;
        console.log(playerCard, computerCard)
        winningConditions();
}

function dealCards() {
    playerPile = deck.splice(0,26)
    computerPile = deck
    // console.log(playerPile)
    // console.log(computerPile)
}
     
//console.log(dealCards)

function shuffle() {
    deck.sort((a, b) => Math.random() - .5)
}
// console.log(deck)

function winningConditions() {
    if (playerCard.value > computerCard.value) {
        text.innerText = "Winner", playerDiscardPile.push(playerCard, computerCard);
        
    }
        else if (playerCard.value < computerCard.value) {
            text.innerText = "Loser", computerDiscardPile.push(playerCard, computerCard);
        }
}   