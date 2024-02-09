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

    describe('.pickRandomTile', () => {
        test('to return array of 2', () => {
        expect(testOpponent.pickRandomTile()).toHaveLength(2)  
    }) 
    })


    describe('.validateTile', () => {
        test('return true if tile has not been attacked', () => {
        expect(testOpponent.validateTile([3,5])).toBe(true)  
    }) 

///Need a mock
  /*       test('return false if tile has been attacked', () => {
        expect(testOpponent.validateTile([7,8])).toBe(false)  
    })  */
    })


})
