let squares = document.querySelectorAll(".square")
let scores = document.querySelectorAll(".score")

let scorePlayer1 = 0
let scorePlayer2 = 0
let scoreDraw = 0


document.addEventListener('DOMContentLoaded', ()=>{
    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event){
    let square = event.target
    let position = square.id

    if(handleMove(position)){
        setTimeout(resetGame,1000)
        updateResults(playerTime)
    } else if((countTurnPlayer1 >= 5 || countTurnPlayer2 >= 5) && (!gameOver)){
        scoreDraw++
        scores[2].innerHTML =+ scoreDraw
        setTimeout(resetGame,1000)

    } 
    updateSquare(position)
}

function updateSquare(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
}

function resetGame(){
    restart()
    squares.forEach((square)=>{
        square.innerHTML = ''
    })  
    updateSquares()
}

function updateSquares(){
    squares.forEach((square)=>{
        let position = square.id
        let symbol = board[position]
        
        if(symbol != ''){
            square.innerHTML = `<div class ='${symbol}''></div>`
        }
            
    })
}

function updateResults(playerTime){
    playerTime == 0 ? scorePlayer1++ : scorePlayer2++
    scores[0].innerHTML = scorePlayer1
    scores[1].innerHTML = scorePlayer2
}

