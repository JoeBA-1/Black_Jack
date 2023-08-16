document.title = "Chose your game"
let userEl = document.getElementById("User")

function game2(){
    document.write(`<h1 style="text-align: center; color: red">Welcome ${userEl.value}</h1>`)
    setTimeout(go_game2,3000)
}
function game1(){
    document.write(`<h1 style="text-align: center; color: red">Welcome ${userEl.value}</h1>`)
    setTimeout(go_game1,3000)

}

function go_game1(){
    window.location.replace("index.html")
}
function go_game2(){
    window.location.replace("list.html")
}