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
            let row = new Array(this.xy+1).fill("empty",1)
            row[0] = null
            row.push(null)
            this.grid.push(row)}
            }
            
    }

    createShip(model, size){
        let newShip = new Ship(model, size)
        this.ships.push(newShip)
    }

    
    placeShip(ship, location, direction){
        let size = ship.size
        

        if(direction === "up"){
            let coordinates = this.createTileArrayStaticX(location,+1,size)
            let validate = this.validatePlacement(coordinates)

            if(validate)this.placeShipAtTiles(ship.model,coordinates)

            return validate
        }
        else if(direction === "down"){
            let coordinates = this.createTileArrayStaticX(location,-1,size)
            let validate = this.validatePlacement(coordinates)

            if(validate)this.placeShipAtTiles(ship.model,coordinates)

            return validate
        }
        else if(direction === "left"){
            let coordinates = this.createTileArrayStaticY(location,-1,size)
            let validate = this.validatePlacement(coordinates)

            if(validate)this.placeShipAtTiles(ship.model,coordinates)

            return validate
        }
        else if(direction === "right"){
            let coordinates = this.createTileArrayStaticY(location,+1,size)
            let validate = this.validatePlacement(coordinates)

            if(validate)this.placeShipAtTiles(ship.model,coordinates)

            return validate
        }
    }

    createTileArrayStaticX([x, y], direction, size){
        let coordinates = []
        coordinates.push([x,y])
        for(let i=0; i < size - 1; ++i){
        y += direction
        coordinates.push([x,y])
        }
        return coordinates
    }
    createTileArrayStaticY([x,y], direction, size){
        let coordinates = []
        coordinates.push([x,y])
        for(let i=0; i < size - 1; ++i){
        x += direction
        coordinates.push([x,y])
        }
        return coordinates
    }

    validatePlacement(coordinates){ 
       for(let i = 0; i < coordinates.length; i++){
        let x = coordinates[i][0]
        let y = coordinates[i][1]
        if(x === null || y === null) return false
        else if(x <= 0 || y <= 0) return false
        else if(x >= this.xy || y >= this.xy) return false
        }
        return true
    }

    placeShipAtTiles(shipModel,tiles){
        for(let i = 0; i < tiles.length; i++){
            let x = tiles[i][0]
            let y =  tiles[i][1]
            this.grid[x][y] = shipModel
        }
    }

    

    receiveAttack(x,y){
        //validate target
        //if ship at grid location ship.hit 
            //ship.isSunk if ship is sunk >> gameboard.remaning ships
        //else mark as miss
    }


}


