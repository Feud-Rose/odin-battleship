export default function drawBoard(target,game){
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
            let firstLetter = col.status.charAt(0).toUpperCase()
            newDiv.addEventListener('click', (e) => {
            let active = game.active
            if(active === 1){
               
                ///Output hit/miss too div.log
                let attackResults = game.computer.gameBoard.receiveAttack(array)
                logBox.textContent = attackResults
                ///set turn too computer
                game.active += 1

                //repaint tile
                newDiv.classList.remove('fog-of-war')
                newDiv.classList.add(attackResults[0])

                ///let Computer take a turn
                let compTurnData = game.computer.takeTurn()
                console.log(compTurnData) 
                 
                let results = compTurnData.results
                /// toDo if(results === "gameover") return game.finish("Computer")

               

                ///else
                let repaintPlayerTile = repaintTile(compTurnData.results, compTurnData.attackedTile)


               

                game.active -= 1   

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
    console.log(arr[0])
    console.log(arr[1])
    console.log(`player-${arr[0]}_${arr[1]}`)
    let div = document.getElementById(`player-${arr[0]}_${arr[1]}`)
    console.log(div)
    div.classList.add(results)

}