import Player from "../modules/players"


describe('player', () => {
    const testPlayer = new Player("Harold")
    
    test('creates player object', () => {
        expect(typeof testPlayer).toBe("object")
    })

    test('assings player name ', () => {
        expect(testPlayer.name).toBe("Harold")
    })  

///Create PlayersBoard

    testPlayer.initializeGameBoard()

    describe('.initializeGameBoard', () => {
    
        expect(testPlayer.gameBoard.xy).toBe(10)

    })

    testPlayer.createFleet()

    describe('.createFleet', () => {

        expect(testPlayer.gameBoard.ships[0].status).toBe("carrier")

        expect(testPlayer.gameBoard.ships[4].status).toBe("patrol-boat")

    })


})