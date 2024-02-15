import Gameboard from "../modules/gameboard";
import Player from "../modules/players";
import Ship from "../modules/ships";




describe("Gameboard", () => {
    const gameBoardTest = new Gameboard(10);
    const createShipSpy = jest.spyOn(gameBoardTest, "createShip");
    const placeShipSpy = jest.spyOn(gameBoardTest, "placeShip");
/*     const createTileArrayStaticXSpy = jest.spyOn(gameBoardTest, "createTileArrayStaticX");
    const createTileArrayStaticYSpy = jest.spyOn(gameBoardTest, "createTileArrayStaticX"); */
    const validatePlacementSpy = jest.spyOn(gameBoardTest, "validatePlacement");
    const receiveAttackSpy = jest.spyOn(gameBoardTest, "receiveAttack");
    const submarine = {status: "submarine", size: 3, hits: 0, sunk: false }


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
        expect(gameBoardTest.grid[0][7].status).toBe("null")
    })
    test('Left edge is null', () => {
        expect(gameBoardTest.grid[5][0].status).toBe("null")
    })
    test('Right edge is null', () => {
        expect(gameBoardTest.grid[7][11].status).toBe("null")
    })
    test('Center is empty', () => {
        expect(gameBoardTest.grid[5][5].status).toBe("empty")
    })
    test('Row 8 is correct', () => {
        expect(gameBoardTest.grid[8]).toStrictEqual([
            {"status": "null"},{"status": "empty",attacked: "No", "fog": false},{"status": "empty",attacked: "No", "fog": false},
            {"status": "empty",attacked: "No", "fog": false},{"status": "empty",attacked: "No", "fog": false},
            {"status": "empty",attacked: "No", "fog": false},{"status": "empty",attacked: "No", "fog": false},
            {"status": "empty",attacked: "No", "fog": false},{"status": "empty",attacked: "No", "fog": false},
            {"status": "empty",attacked: "No", "fog": false},{"status": "empty",attacked: "No", "fog": false},{"status": "null"}]
        )
    })

    

    describe(".createShip", () => {
        
        test("to be called", () => {
          expect(gameBoardTest.createShip("submarine", 3)).toBeUndefined();
          expect(createShipSpy).toHaveBeenCalledWith("submarine", 3);
    
          createShipSpy.mockClear();
        });

        test("updates gameBoard", () => {
            expect(gameBoardTest.createShip("submarine",3)).toBeUndefined();
            expect(gameBoardTest.ships[0]).toEqual(submarine);
            createShipSpy.mockClear();
          });

      });


    describe(".placeShip", () => {
    
        test("to be called", () => {
          expect(gameBoardTest.placeShip(0, [3,5],"left")).toBe(true);
          expect(placeShipSpy).toHaveBeenCalledWith(0, [3,5], "left");
    
         
        });

        test("updates gameBoard", () => {
            expect(gameBoardTest.placeShip(0,[3,5],"left")).toBe(true);
            expect(gameBoardTest.grid[3][4].status).toEqual("submarine");
            expect(gameBoardTest.grid[3][3].status).toEqual("submarine");
            expect(gameBoardTest.grid[3][5].status).toEqual("submarine");
          });

        test("doesn't place outside gameBoard", () => {
            expect(gameBoardTest.placeShip(0,[1,1],"up")).toBe(false);
            expect(gameBoardTest.grid[1][0].status).toEqual("null");
            expect(gameBoardTest.grid[1][1].status).toEqual("empty");
            expect(gameBoardTest.grid[1][2].status).toEqual("empty");
        });
    });


    

    describe(".createTileArrayStaticX", () => {

        test("returns correct array of arrays", () => {
            expect(gameBoardTest.createTileArrayStaticX([3,5],-1, 3)).toStrictEqual([[3,5],[3,4],[3,3]]);
        });
    });     


    describe(".createTileArrayStaticY", () => {

        test("returns correct array of arrays", () => {
            expect(gameBoardTest.createTileArrayStaticY([3,5],-1, 3)).toStrictEqual([[3,5],[2,5],[1,5]]);
        });
    });    



    describe(".validatePlacement", () => {
    
        test("returns true on valid selection", () => {
            expect(gameBoardTest.validatePlacement([[1,3],[2,3]])).toBe(true);
           
            });

        test("returns false on null selection", () => {
            expect(gameBoardTest.validatePlacement([[null,3],[1,3]])).toBe(false);
            
            });    

        test("returns false on negative selection", () => {
            expect(gameBoardTest.validatePlacement([[-3,3],[1,3]])).toBe(false);
            validatePlacementSpy.mockClear();
            });   

    });   

   

    describe(".receiveAttack", () => {
    
        test("returns Hit if ship is on tile", () => {
            expect(gameBoardTest.receiveAttack([3,5])).toBe("hit");
        });

        test("returns Missed if tile is empty", () => {
            expect(gameBoardTest.receiveAttack([7,7])).toBe("missed");
        });
    });    


    describe(".isTileEmpty", () => {
    
        test("returns true if ship is on tile", () => {
            expect(gameBoardTest.isTileEmpty([3,5])).toBe(false);
        });

        test("returns false if tile is empty", () => {
            expect(gameBoardTest.isTileEmpty([7,7])).toBe(true);
        });
    });    

    describe(".areAllShipsSunk", () => {
      
        
        const sunkShips = {remaining: 0}
        const unSunkShips = {remaining: 5}

        test("returns true if all ships are sunk", () => {
            expect(gameBoardTest.areAllShipsSunk(sunkShips.remaining)).toBe(true);
        });

        
        test("returns false if any amount of ships remain", () => {
            expect(gameBoardTest.areAllShipsSunk(unSunkShips.remaining)).toBe(false);
        });
    }); 


       //default ship placement

       describe('.defaultPlaceShip', () => {
        const newPlayer = new Player("Carol")
        newPlayer.initializeGameBoard()
        newPlayer.createFleet()
        newPlayer.gameBoard.defaultPlaceShip()

        test('assigns carrier to be at tile 5,7', () => {
        expect(newPlayer.gameBoard.grid[5][7].status).toBe("carrier")
        })
        test('assigns patrol-boat to be at tile 2,1', () => {
        expect(newPlayer.gameBoard.grid[2][1].status).toBe("patrol-boat")
        })

    })









    placeShipSpy.mockClear()
    receiveAttackSpy.mockClear()
})