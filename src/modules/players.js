
import Gameboard from "./gameboard"


export default class Player{
    constructor(name){
        this.name = name
        this.gameBoard = null
        this.opponent = null
    }

    initializeGameBoard(){
        this.gameBoard = new Gameboard(10)
        
    }

    createFleet(){
       this.gameBoard.createShip("carrier", 5)
       this.gameBoard.createShip("battleship", 4)
       this.gameBoard.createShip("destroyer ", 3)
       this.gameBoard.createShip("submarine", 3)
       this.gameBoard.createShip("patrol-boat", 2)

    }
    
}