let board = document.querySelector('.board')
let cells = document.querySelectorAll('.cell')
let winningMessage = document.querySelector('.winning-message')
let restartBtn = document.querySelector('.restart-btn')
let text = document.querySelector('.text')

let indexCell = 0
let playerTurn
let gameBoard = ['','','','','','','','','',]
let winingCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,7]]

let mark = playerTurn ? 'circle': 'x'
for (let cell of cells) {
    
    cell.setAttribute('id', `${indexCell}`)
    indexCell++


    cell.addEventListener('click', (e) => {
        
        gameBoard[e.target.getAttribute('id')] = playerTurn? gameBoard[e.target.getAttribute('id')] = 'circle' : gameBoard[e.target.getAttribute('id')] = 'x'
        playerTurn = !playerTurn 
        CheckForWin()
        
        
    })
}

function CheckForWin() {
    for(let wincombo of winingCombos) {
        let winner = wincombo.every((element, _index, _array) => gameBoard[element] == mark)
        if (winner) {
            winningMessage.style.display = 'flex'
            text.textContent = `${mark} wins!`}

    }
}
restartBtn.addEventListener('click', ()=>{
    winningMessage.style.display = 'none'
    playerTurn = undefined
    gameBoard = ['','','','','','','','','',]

})

