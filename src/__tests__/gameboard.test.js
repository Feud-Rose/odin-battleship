import Gameboard from "../modules/gameboard";




describe("Gameboard", () => {
    const gameBoardTest = new Gameboard(10);
    const createShipSpy = jest.spyOn(gameBoardTest, "createShip");
    const placeShipSpy = jest.spyOn(gameBoardTest, "placeShip");
    const receiveAttackSpy = jest.spyOn(gameBoardTest, "receiveAttack");
    const submarine = {model: "submarine", length: 3, hits: 0, sunk: false }


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

    

    describe(".createShip", () => {
        


        test("is a function", () => {
          expect(typeof gameBoardTest.createShip).toBe("function");
        });
    
        test("to be called", () => {
          expect(gameBoardTest.createShip("submarine", 3)).toBeUndefined();
          expect(createShipSpy).toHaveBeenCalledWith("submarine", 3);
    
          createShipSpy.mockClear();
        });

        test("updates gameboard", () => {
            expect(gameBoardTest.createShip("submarine",3)).toBeUndefined();
            expect(gameBoardTest.ships[0]).toEqual(submarine);
            createShipSpy.mockClear();
          });

      });


    describe(".placeShip", () => {
    
        test("is a function", () => {
          expect(typeof gameBoardTest.placeShip).toBe("function");
        });
    
        test("to be called", () => {
          expect(gameBoardTest.placeShip("submarine", [3,5],"horizontal")).toBeUndefined();
          expect(placeShipSpy).toHaveBeenCalledWith("submarine", [3,5], "horizontal");
    
          placeShipSpy.mockClear();
        });

        test("updates gameboard", () => {
            expect(gameBoardTest.placeShip("submarine",[3,5],"vertical")).toBeUndefined();
            expect(gameBoardTest.grid[3][4]).toEqual("S");
            expect(gameBoardTest.grid[3][5]).toEqual("S");
            expect(gameBoardTest.grid[3][6]).toEqual("S");
            placeShipSpy.mockClear();
          });

        test("doesn't place outside gameboard")


      });



    placeShipSpy.mockClear()
    receiveAttackSpy.mockClear()
})