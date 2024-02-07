import Ship from "./ships"



export default class Gameboard{
    constructor(num){
        
        this.xy = num
        this.remaining = 0
        this.grid = []
        this.ships = []
        for(let i = 0; i < this.xy + 2; i++){ 

            let last = this.xy + 1

            if(i === 0 || (i === last))
            {
            let row = new Array(this.xy+2).fill(null)
            this.grid.push(row)
        }
            else{
            let row = new Array(this.xy+1).fill(0,1)
            row[0] = null
            row.push(null)
            this.grid.push(row)}
            }
            
    }

    createShip(model, length){
        let newShip = new Ship(model, length)
        this.ships.push(newShip)
    }

    placeShip(model, length, location, orientation){
        
    }

    receiveAttack(x,y){
        //validate target
        //if ship at grid location ship.hit 
            //ship.isSunk if ship is sunk >> gameboard.remaning ships
        //else mark as miss
    }


}


