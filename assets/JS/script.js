document.title = 'Blackjack'
let riddleEL = document.getElementById("riddle")
let cardsEL = document.getElementById("cards")
let sumEL = document.getElementById("sum")
let startBtnEL = document.getElementById("start_btn")
let newcardBtnEL = document.getElementById("newcard_btn")
let newgameBtnEL = document.getElementById("newgame_btn")
let amountEL = document.getElementById("amount")
const cardnumbers = ["1","2","3","4","5","6","7","8","9","10","11","12"]
let char06 = 0

newgameBtnEL.addEventListener("click", function(){

window.location.replace("index.html")

})

startBtnEL.addEventListener("click", function(){
    let char01 = Math.floor (Math.random(cardnumbers) * cardnumbers.length ) + 1
    let char02 = Math.floor (Math.random(cardnumbers) * cardnumbers.length ) + 1
    let char04 = Math.floor (Math.random(cardnumbers) * cardnumbers.length ) + 1
    let char03 = 0
    let char05 =0
    char06 = 200
    let char07=0
    let char08 = Math.floor (Math.random(cardnumbers) * cardnumbers.length ) + 1
    cardsEL.innerHTML += ` ${char01} ${char02}`
    char03 = char01 + char02
    sumEL.innerHTML += ` ${char03}`
    amountEL.innerHTML = `Joe: $${char06}`
    if (char03 == 21 && char06>=0){
    
        riddleEL.innerHTML = "You Win"}
        else if(char03<21 && char06>=0){
        
            riddleEL.innerHTML = "Draw another card for the cost of $50"
            newcardBtnEL.addEventListener("click",function(){
                char06 -= 50
                cardsEL.innerHTML += ` ${char04}`
                char05 = char03 + char04
                sumEL.innerHTML = `Sum: ${char05}`
                amountEL.innerHTML = `Joe: $${char06}`
                if (char05 == 21 && char06>=0){
                
                    riddleEL.innerHTML = "You Win"
                }else if (char05<21 && char06>=0){
                
                    riddleEL.innerHTML = "Draw another card"
                    newcardBtnEL.addEventListener("click",function(){
                        char07 = char05 + char08
                        sumEL.innerHTML = `Sum yalla: ${char07}`
                        amountEL.innerHTML = `Joe: $${char06}`
                        if (char07 == 21 && char06>=0){
                        
                            riddleEL.innerHTML = "You Win player 1"
                        // }else if(char07 < 21 && char06>=0){
                        //     amountEL.innerHTML = `Ma ba3ref shou 3am bi sir`
                        
                        }else if(char07>21 && char06>0){
                            riddleEL.innerHTML = "You Lose Start Over player 1"
                            sumEL.innerHTML = `Sum: ${char07}`
                            // amountEL.innerHTML = `Joe: $${char06}`
                        }
                    })
                    // char05 = char03 + char04
                    // sumEL.innerHTML = `Sum yalla: ${char05}`
                    // amountEL.innerHTML = `Joe: $${char06}`
                
                }else if(char05>21 && char06>0){
                    riddleEL.innerHTML = "You Lose Start Over"
                    sumEL.innerHTML = `Sum: ${char05}`
                    // amountEL.innerHTML = `Joe: $${char06}`
                }

            




            })
        }else if(char03>21){
            riddleEL.innerHTML = "Start Over"
        }



})

function go_main(){
    location.replace("game.html")}
