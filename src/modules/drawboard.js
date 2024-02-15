function dra(target,game){
    let newBoard = document.querySelector(`.${target}-grid`)
    newBoard.textContent = ""
    let grid = game[target].gameBoard.grid
    const logBox = document.querySelector(".log")
    console.log(game)
    console.log(grid)
    grid.forEach((row,index) => {
        row.forEach((col,yIndex) => {
        let newDiv = document.createElement("div")
        newDiv.classList.add('tile',col.status)
        newDiv.id = `${index}_${yIndex}`
        
        ///Add event listener too computer squares that allow player too attack on click
        if(col.fog === true) { 
            newDiv.id = `${index}_${yIndex}`
            newDiv.classList.add('fog-of-war')
            let array = [index,yIndex]
            let x = index
            let y = yIndex
            newDiv.addEventListener('click', (e) => {
            let active = game.active
            console.log(e.target)
            if(active === 1){
                console.log(col)
                ///tile not attacked
          
                    if(col.attacked === "No"){
                   

                    ///Output hit/miss too div.log
                    let attackResults = game.computer.gameBoard.receiveAttack(array)
                    
                    //repaint tile
                   
                    newDiv.classList.remove('fog-of-war')
                    newDiv.classList.add(attackResults[0])

                    //display results
                    /// toDo if(results === "gameover") return game.finish("Player Wins")
                    logBox.textContent = attackResults
                   
                    ///set turn too computer
                    game.active += 1
                    let passTurn = true
                    ///let Computer take a turn
                    if(passTurn === true){

                        let compTurnData = game.computer.takeTurn()
                        
                        let results = compTurnData.results
                        /// toDo if(results === "gameover") return game.finish("Computer Wins")
        
                        ///else
                        let repaintPlayerTile = repaintTile(compTurnData.results, compTurnData.attackedTile)
        
                
                        game.active -= 1   }
                
                }
        }
            })
        }
        ///Add class too player tiles to find when they are attacked
        else {
            newDiv.id = `player-${index}_${yIndex}`

        }



        newDiv.textContent = `${index}_${yIndex}`
        
        newBoard.appendChild(newDiv)

        })

    })

} 

function repaintTile(results, arr){

    let div = document.getElementById(`player-${arr[0]}_${arr[1]}`)
   
    div.classList.add(results)

}

export default function drawBoard(target,game){
    let newBoard = document.querySelector(`.${target}-grid`)
    newBoard.textContent = ""
    let grid = game[target].gameBoard.grid
    const logBox = document.querySelector(".log")
    console.log(game)
    console.log(grid)
    for(let i = 0; i< game[target].gameBoard.grid.length;i++){
        for(let j = 0; j< game[target].gameBoard.grid.length;j++){
            let xIndex = i
            let yIndex = j
            let newDiv = document.createElement("div")
            console.log(game[target].gameBoard.grid[i][j].attacked)
            newDiv.classList.add('tile',game[target].gameBoard.grid[i][j].status)
            newDiv.id = `${xIndex}_${yIndex}`
            newDiv.textContent = `${xIndex}_${yIndex}`
            let fog = game[target].gameBoard.grid[i][j].fog
            console.log(fog)
            if(fog === true) { 
                newDiv.id = `${xIndex}_${yIndex}`
                newDiv.classList.add('fog-of-war')



                newDiv.addEventListener('click', (e) => {
                    let active = game.active
                    console.log(e.target)
                    if(active === 1){
                        console.log(game[target].gameBoard.grid[i][j].attacked)
                        ///tile not attacked
                
                        if(game[target].gameBoard.grid[i][j].attacked === "No"){

                            ///Output hit/miss too div.log
                            let attackResults = game.computer.gameBoard.receiveAttack([xIndex,yIndex])
                            
                            //repaint tile
                        
                            newDiv.classList.remove('fog-of-war')
                            newDiv.classList.add(attackResults[0])
        
                            //display results
                            /// toDo if(results === "gameover") return game.finish("Player Wins")
                            logBox.textContent = attackResults
                        
                            ///set turn too computer
                            game.active += 1
                            let passTurn = true
                            ///let Computer take a turn
                            if(passTurn === true){
        
                                let compTurnData = game.computer.takeTurn()
                                
                                let results = compTurnData.results
                                /// toDo if(results === "gameover") return game.finish("Computer Wins")
                
                                ///else
                                let repaintPlayerTile = repaintTile(compTurnData.results, compTurnData.attackedTile)
                
                        
                                game.active -= 1   }
                        
                        }  

                   
                    }
                 
                })
            }
            ///Add class too player tiles to find when they are attacked  
            else {
                            newDiv.id = `player-${xIndex}_${yIndex}`
        
            }
            newBoard.appendChild(newDiv)
        }    
    }
}
