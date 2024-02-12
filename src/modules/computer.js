
import Player from "../modules/players";
import Gameboard from "./gameboard";


export default class Computer extends Player{
    
    constructor(name){
        super()
        this.name = "Computer"
        this.opponent = null
        this.attemptedAttacks = new Set([])
    }
    
    randomNumber() {
        return Math.round(Math.random() * 9 + 1);
      }

    //Call with (this.randomNumber,this.randomNumber)
    pickTile(callbackX,callbackY){
        return [callbackX(),callbackY()]
    }

    validateTile(arr){

        let check = this.attemptedAttacks.has(`${arr[0]}_${arr[1]}`)
        if(!check) return true  ///if "attacked: false" return as Valid
        else return false
    }

    getRandomTile(){
        let randomTile = this.pickTile(this.randomNumber,this.randomNumber)
        let valid = this.validateTile(randomTile)
        if(valid) return randomTile
        else return this.getRandomTile()

    }


    takeTurn(){
      
        let randomTile = this.getRandomTile()
        let results = this.opponent.gameBoard.receiveAttack(randomTile)
        this.attemptedAttacks.add(`${randomTile[0]}_${randomTile[1]}`);
        return results

      
        



    }


}

   
