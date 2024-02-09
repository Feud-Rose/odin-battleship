import Player from "./players";



export default class Computer extends Player{
    
    constructor(name){
        super()
        this.name = name
    }
    
    randomNumber() {
        return Math.round(Math.random() * 9 + 1);
      }

    pickRandomTile(){
        let x = this.randomNumber()
        let y = this.randomNumber()
        return [x,y]
    }

    validateTile(arr){
        let check = this.gameBoard.grid[arr[0]][arr[1]].attacked
        if(check) return true
        else return false

    }




}

   
