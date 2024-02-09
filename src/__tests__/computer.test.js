import Computer from "../modules/computer.js"


describe('computer', () => {
    const testOpponent = new Computer("Computer")
    
    test('creates opposing player object', () => {
        expect(typeof testOpponent).toBe("object")
    })

    test('assigns player name ', () => {
        expect(testOpponent.name).toBe("Computer")
    })  

    testOpponent.initializeGameBoard()

    describe('.initializeGameBoard', () => {
    
        expect(testOpponent.gameBoard.xy).toBe(10)

    })
    console.log(testOpponent)

    testOpponent.createFleet()

    describe('.createFleet', () => {

        expect(testOpponent.gameBoard.ships[1].status).toBe("battleship")

        expect(testOpponent.gameBoard.ships[3].status).toBe("submarine")

    })

})
