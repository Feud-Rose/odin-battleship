


export default class Gameboard{
    constructor(num){
        
        this.xy = num
        this.grid = []
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
}


/*     if(i === 0 || i === this.xy+2) {
                
                let row = new Array(this.xy+2).fill(0)
                this.grid.push(row)
            }
            else{
                this.grid.push(new Array(this.xy+1).fill(1,1).push(0));
                this.grid[0] = 0
            } */