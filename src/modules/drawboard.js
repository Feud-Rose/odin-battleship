export default function drawBoard(target,grid){
    let newBoard = document.querySelector(`.${target}-grid`)
    console.log(newBoard)
    console.log(grid)
    grid.forEach((row,index) => {
        row.forEach((col,yIndex) => {
        let newDiv = document.createElement("div")
        newDiv.classList.add('tile',col.status,`${index}_${yIndex}`)
        
        if(col.fog === true) { 
            newDiv.classList.add('fog-of-war') 
        }
        
        newDiv.textContent = `${index}_${yIndex}`
        newBoard.appendChild(newDiv)

        })

    })

}