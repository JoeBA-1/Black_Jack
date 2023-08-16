let stageEl = document.getElementById("stage")
let fightBtnEl = document.getElementById("fightbtn")
document.title = "Time To Fight"
const fighters = [
    "🐉", "🐥", "🐊", "💩","🦍", "🐢","🐩","🦀","🐝","🤖","🐘",
    "🐸","🕷","🐆","🦕","🦁"];

    
    fightBtnEl.addEventListener("click", function(){
    let char01 = Math.floor (Math.random(fighters) * fighters.length )
    let char02 = Math.floor (Math.random(fighters) * fighters.length )
    let diff = 0
    stageEl.innerHTML = ` ${fighters[char01]} VS ${fighters[char02]}`
    if (fighters[3] == fighters[char01] || fighters[3] == fighters[char02]){ 
      stageEl.innerHTML += `<br> ${fighters[3]} is the winner`}else{
      if(char01>char02){
        diff = char01 - char02
        stageEl.innerHTML += `<br> ${fighters[char01]} is the winner <br> ${fighters[char01]} win by ${diff} ponts`
        if(diff>9){
          fightBtnEl.style.backgroundColor="#0f5"
        }else{
            fightBtnEl.style.backgroundColor="#fff"
          }
      }else if(char01<char02){
        diff = char02 - char01
        stageEl.innerHTML += `<br> ${fighters[char02]} is the winner <br> ${fighters[char01]} win by ${diff} ponts`
        if(diff>9){
          fightBtnEl.style.backgroundColor="#0f5"
        }else{
          fightBtnEl.style.backgroundColor="#fff"
        }
      }else{
        stageEl.innerHTML += `<br> Tie Game`
        fightBtnEl.style.backgroundColor="#f0f"
      }
      }})


      function go_main(){
        location.replace("game.html")
    } 