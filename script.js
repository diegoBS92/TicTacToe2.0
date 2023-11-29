let board = document.querySelector('.board')
let cells = document.querySelectorAll('.cell')
let winningMessage = document.querySelector('.winning-message')
let restartBtn = document.querySelector('.restart-btn')
let text = document.querySelector('.text')

let indexCell = 0
let playerTurn
let gameBoard = ['','','','','','','','','',]
let winingCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

let mark = playerTurn ? 'circle': 'x'
for (let cell of cells) {
    
    cell.setAttribute('id', `${indexCell}`)
    indexCell++


    cell.addEventListener('click', setMarks)
}
let marks = 0
function setMarks(e) {
        e.target.classList.add(`${mark}`)
        gameBoard[e.target.getAttribute('id')] = mark
        console.log(gameBoard)
        
        
    
        CheckForWin()
        playerTurn = !playerTurn 
        mark = playerTurn ? 'circle': 'x'
        e.target.removeEventListener('click', setMarks)
}
function CheckForWin() { 
    console.log(marks)
    marks ++
    if (marks == 9 ) {
        winningMessage.style.display = 'flex'
        text.textContent = `its a draw!`
        marks == 0
    }

    for(let wincombo of winingCombos) {
        let winner = wincombo.every((element, _index, _array) => gameBoard[element] == mark)
        if (winner) {
            winningMessage.style.display = 'flex'
            text.textContent = `${mark} wins!`
            marks = 0}

    }

}
restartBtn.addEventListener('click', ()=>{
    winningMessage.style.display = 'none'
    playerTurn = undefined
    gameBoard = ['','','','','','','','','',]
    cells.forEach(element => {
        element.classList.remove('x')
        element.classList.remove('circle')
        mark = 'x'
        indexCell=0
        element.addEventListener('click', setMarks)
        marks = 0
    })

})

