import Computer from "./computer";
import Player from "./players";



export default class GameMaster{

    constructor(name){
        this.player = new Player(name)
        this.computer = new Computer()

        //Who has active turn Player is 1 Comp is 2
        this.active = 1

    }

    createGameBoards(){
        this.player.initializeGameBoard()
        console.log(this.player.gameBoard)
        this.computer.initializeGameBoard()
    }

    linkPlayers(){
        this.player.opponent = this.computer
        this.computer.opponent = this.player
    }
}