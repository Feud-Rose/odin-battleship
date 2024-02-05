import Gameboard from "../modules/gameboard"

const gameBoardTest = new Gameboard(10)

test('Gameboard xy is correct size', () => {
    expect(gameBoardTest.xy).toBe(10)
})

test('Gameboard xy is correct size', () => {
    expect(gameBoardTest.grid.length).toBe(12)
})

test('Bottom edge is right length', () => {
    expect(gameBoardTest.grid[0].length).toBe(12)
})
test('Top edge is null', () => {
    expect(gameBoardTest.grid[0][7]).toBe(null)
})
test('Left edge is null', () => {
    expect(gameBoardTest.grid[5][0]).toBe(null)
})
test('Right edge is null', () => {
    expect(gameBoardTest.grid[7][11]).toBe(null)
})
test('Center is empty', () => {
    expect(gameBoardTest.grid[5][5]).toBe(0)
})
test('Row 8 is correct', () => {
    expect(gameBoardTest.grid[8]).toStrictEqual([
        null,0,0,0,0,0,0,0,0,0,0,null]
    )
})