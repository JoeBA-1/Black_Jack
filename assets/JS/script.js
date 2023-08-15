document.title = 'Blackjack'
let riddleEL = document.getElementById("riddle")
let cardsEL = document.getElementById("cards")
let sumEL = document.getElementById("sum")
let startBtnEL = document.getElementById("start_btn")
let newcardBtnEL = document.getElementById("newcard_btn")
let newgameBtnEL = document.getElementById("newgame_btn")
let amountEL = document.getElementById("amount")
const cardnumbers = ["1","2","3","4","5","6","7","8","9","10","11","12"]

newgameBtnEL.addEventListener("click", function(){

window.location.replace("index.html")

})

newcardBtnEL.addEventListener("click", function(){
    let char01 = Math.floor (Math.random(cardnumbers) * cardnumbers.length )
    cardsEL.innerHTML += `${cardnumbers[char01]} `



})