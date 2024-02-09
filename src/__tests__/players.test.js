import Player from "../modules/players"


describe('player', () => {
    const testPlayer = new Player("Harold")
    
    test('creates player object', () => {
        expect(typeof testPlayer).toBe("object")
    })

    test('assigns player name ', () => {
        expect(testPlayer.name).toBe("Harold")
    })  

///Create PlayersBoard

    testPlayer.initializeGameBoard()

    describe('.initializeGameBoard', () => {
        test('creates gameboard with correct grid x/y', () => {
        expect(testPlayer.gameBoard.xy).toBe(10)
        })
    })

    testPlayer.createFleet()

    describe('.createFleet', () => {
        test('assigns carrier to index of 0', () => {
        expect(testPlayer.gameBoard.ships[0].status).toBe("carrier")
        })
        test('assigns patrol-boat to index of 4', () => {
        expect(testPlayer.gameBoard.ships[4].status).toBe("patrol-boat")
        })

    })


})