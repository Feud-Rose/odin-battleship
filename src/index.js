import GameMaster from "./modules/gamemaster"







const newGameButton = document.getElementById('newGameButton')

newGameButton.addEventListener("click", (e) => {
    let name = document.getElementById("name").value
    let start = startNewGame(name)
})


function startNewGame(name){
    const newGame = new GameMaster(name)
    
    newGame.createGameBoards()
    newGame.linkPlayers()
    
    /////function to create board UI
    
  /*   console.log(newGame) */
}