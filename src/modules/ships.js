
export default class Ship{
    constructor(boat, length){
        this.name = boat;
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit(){
        this.hits +=1
    }

    isSunk(){
        if(this.hits >= this.length) return true

        return false
    }

    sinkShip(){
        this.sunk = true;
    }
}