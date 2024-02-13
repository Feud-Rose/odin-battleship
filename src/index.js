import GameMaster from "./modules/gamemaster"
import './styles/gameboard.css'
import Gameboard from "./modules/gameboard"





const newGameButton = document.getElementById('newGameButton')

newGameButton.addEventListener("click", (e) => {
    let name = document.getElementById("name").value
    let start = startNewGame(name)
})

function drawBoard(target,grid){
    let newBoard = document.querySelector(`.${target}-grid`)
    console.log(newBoard)
    console.log(grid)
    grid.forEach((row,index) => {
        row.forEach((col,yIndex) => {
        let newDiv = document.createElement("div")
        newDiv.classList.add('tile',col.status,`${index}_${yIndex}`)
        
        if(col.fog === true) { 
            newDiv.classList.add('fog-of-war') 
        }
        
        newDiv.textContent = `${index}_${yIndex}`
        newBoard.appendChild(newDiv)

        })

    })
  





   
}

function startNewGame(name){
    const newGame = new GameMaster(name)
    
    
    newGame.createGameBoards()
    newGame.linkPlayers()

    //Run Fleet Creation
    newGame.player.createFleet()
    newGame.computer.createFleet()

    ///remove default placement later
    newGame.player.gameBoard.defaultPlaceShip()
    newGame.computer.gameBoard.defaultPlaceShip()
    
    /////function to create board UI
    let playerDraw = drawBoard("player",newGame.player.gameBoard.grid)
    let computerDraw = drawBoard("computer",newGame.computer.gameBoard.grid)
 
    console.log(newGame)
}

