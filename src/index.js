import GameMaster from "./modules/gamemaster"
import './styles/gameboard.css'
import Gameboard from "./modules/gameboard"
import drawBoard from "./modules/drawboard.js"




const newGameButton = document.getElementById('newGameButton')

newGameButton.addEventListener("click", (e) => {
    let name = document.getElementById("name").value
    let start = startNewGame(name)
})

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
    let playerDraw = drawBoard("player",newGame)
    let computerDraw = drawBoard("computer",newGame)
 





    console.log(newGame)
}

