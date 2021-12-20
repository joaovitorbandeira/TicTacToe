let board = ['', '', '', '', '', '', '', '', '']
let playerTime = 0
let symbols = ['player1', 'player2']


let gameOver = false

let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


let countTurnPlayer1 = 0
let countTurnPlayer2 = 0

function handleMove(position){

    if(gameOver){
        return
    }

    if(board[position] == ''){
        board[position] = symbols[playerTime]

        gameOver = isWin()

        if(!gameOver){
            if(playerTime == 0){
                countTurnPlayer1++
                playerTime = 1
            }else{
                countTurnPlayer2++
                playerTime=0
            }
        }
    }
    return gameOver
}


function isWin(){
    for(let i = 0; i < winStates.length; i++){
        let sequence = winStates[i]
        let pos1 = sequence[0]
        let pos2 = sequence[1]
        let pos3 = sequence[2]


        if(board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != ''){
            return true
        }
    }
    return false
}

function restart(){
    board = ['', '', '', '', '', '', '', '', '']
    playerTime = 0
    gameOver = false

    countTurnPlayer1 = 0
    countTurnPlayer2 = 0
}

