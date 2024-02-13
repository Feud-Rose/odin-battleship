
import Player from "../modules/players";
import Gameboard from "./gameboard";


export default class Computer extends Player{
    
    constructor(name){
        super()
        this.name = "Computer"
        this.opponent = null
        this.attackTargets = []
    }
    
    randomNumber(max,min=0) {
        return Math.round(Math.random() * (max-2) + min);
      }

    fillAttackTargets(){
        console.log(this.attackTargets)
        this.gameBoard.grid.forEach((row,index) => {
            row.forEach((col,yIndex) => {
                let status = col.status
                console.log(status)
                if(status === "empty"){
                   this.attackTargets.push([index,yIndex])
                }
            })
               
    })
    }


    //Call with (this.randomNumber,this.randomNumber)
    pickTile(callbackX,callbackY){
        return [callbackX(),callbackY()]
    }

    ///ToDo refactor to be more efficient
    getRandomTile(){
        let max = this.attackTargets.length
        let newRandom = this.randomNumber(max)
        let cloneArr = this.attackTargets

    /*     let valid = this.validateTile(randomTile)
        if(valid) return randomTile */

        let sliceTarget = cloneArr.splice(newRandom,1)
        console.log(sliceTarget)
        this.attackTargets = cloneArr
        console.log(this.attackTargets.length)
        return [sliceTarget[0][0],sliceTarget[0][1]]

    }


    takeTurn(game){
        let randomTile = this.getRandomTile()
        console.log(randomTile)
        let results = this.opponent.gameBoard.receiveAttack(randomTile)
        
        ///return an object with information about turn

        let obj = {results: results, attackedTile: randomTile }

        return obj
    }


}

   
class test{

    constructor(){
        this.gameBoard
        this.attackTargets = new Set([])

        this.gameBoard.grid.forEach((row,index) => {
            row.forEach((col,yIndex) => {
    })
    })
    }
    fillAttackTargets(){
        this.gameBoard.grid.forEach((row,index) => {
            row.forEach((col,yIndex) => {
                this.attackTargets.push(`${index}_${yIndex}`)
    })
    })
    }

    randomNumber() {
        return Math.round(Math.random() * 9 + 1);
      }

      validateTile(arr){

        let check = this.attemptedAttacks.has(`${arr[0]}_${arr[1]}`)
        if(!check) return true  ///if "attacked: false" return as Valid
        else return false
    }
    //Call with (this.randomNumber,this.randomNumber)
    pickTile(callbackX,callbackY){
        return [callbackX(),callbackY()]
    }


    getRandomTile(){
        let randomTile = this.pickTile(this.randomNumber,this.randomNumber)
        let valid = this.validateTile(randomTile)
        if(valid) return randomTile
        else return this.getRandomTile()

    }



}