import Computer from "../modules/computer.js"
import GameMaster from "../modules/gamemaster.js"
import Gameboard from "../modules/gameboard.js"


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

        test('assigns player name ', () => {
        expect(testOpponent.gameBoard.xy).toBe(10)
       }) 
    })
    

    testOpponent.createFleet()

    describe('.createFleet', () => {
        test('assigns battleship too index 1', () => {
        expect(testOpponent.gameBoard.ships[1].status).toBe("battleship")
    }) 
        test('assigns submarine too index 3 ', () => {
        expect(testOpponent.gameBoard.ships[3].status).toBe("submarine")
    }) 
    })

    ///Need a Mock test as well

    describe('.randomNumber', () => {
        test('less then 11', () => {
        expect(testOpponent.randomNumber()).toBeLessThan(11)
    }) 
        test('greater then 0', () => {
        expect(testOpponent.randomNumber()).toBeGreaterThan(0)
    })  
    })

    describe('.pickTile', () => {
        test('to return array of with length 2', () => {
        const randomNum = jest
        .fn(() => "null")
        .mockImplementationOnce(() => 3)
        .mockImplementationOnce(() => 4)

        expect(testOpponent.pickTile(randomNum,randomNum)).toEqual([3,4])  

    }) 
    })


    describe('.validate', () => {
        testOpponent.attemptedAttacks.add("4_8");
        testOpponent.gameBoard.grid[4][8] = { status: 'empty', attacked: true }
       
        test('return true if tile is a valid target', () => {
        expect(testOpponent.validateTile([3,5])).toBe(true)  
        }) 
        test('return false if tile is an invalid target', () => {
        expect(testOpponent.validateTile([4,8])).toBe(false) 
         })
    })

    describe('.createFleet', () => {
        test('assigns carrier to index of 0', () => {
        expect(testOpponent.gameBoard.ships[0].status).toBe("carrier")
        })
        test('assigns patrol-boat to index of 4', () => {
        expect(testOpponent.gameBoard.ships[4].status).toBe("patrol-boat")
        })

    })


    //Todo Add More take turn tests
    describe('.takeTurn', () => {

        let testMaster = new GameMaster("Dave")
        testMaster.linkPlayers()
        testMaster.createGameBoards()
        const hitMiss = ["Hit", "Missed"]

        test('to return hit or missed', () => {
            const takeTestTurn = testMaster.computer.takeTurn()
        expect(hitMiss).toContain(takeTestTurn)  
        
    }) 
    }) 


})
