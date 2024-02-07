import Gameboard from "../modules/gameboard";




describe("Gameboard", () => {
    const gameBoardTest = new Gameboard(10);
    const createShipSpy = jest.spyOn(gameBoardTest, "createShip");
    const placeShipSpy = jest.spyOn(gameBoardTest, "placeShip");
    const createTileArrayStaticXSpy = jest.spyOn(gameBoardTest, "createTileArrayStaticX");
    const createTileArrayStaticYSpy = jest.spyOn(gameBoardTest, "createTileArrayStaticX");
    const validatePlacementSpy = jest.spyOn(gameBoardTest, "validatePlacement");
    const receiveAttackSpy = jest.spyOn(gameBoardTest, "receiveAttack");
    const submarine = {model: "submarine", size: 3, hits: 0, sunk: false }


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
        expect(gameBoardTest.grid[5][5]).toBe("empty")
    })
    test('Row 8 is correct', () => {
        expect(gameBoardTest.grid[8]).toStrictEqual([
            null,"empty","empty","empty","empty","empty","empty","empty","empty","empty","empty",null]
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
          expect(gameBoardTest.placeShip(submarine, [3,5],"left")).toBe(true);
          expect(placeShipSpy).toHaveBeenCalledWith(submarine, [3,5], "left");
    
         
        });

        test("updates gameboard", () => {
            expect(gameBoardTest.placeShip(submarine,[3,5],"left")).toBe(true);
            expect(gameBoardTest.grid[1][5]).toEqual("submarine");
            expect(gameBoardTest.grid[2][5]).toEqual("submarine");
            expect(gameBoardTest.grid[3][5]).toEqual("submarine");
          });

        test("doesn't place outside gameboard", () => {
            expect(gameBoardTest.placeShip(submarine,[1,1],"down")).toBe(false);
            expect(gameBoardTest.grid[1][0]).toEqual(null);
            expect(gameBoardTest.grid[1][1]).toEqual("empty");
            expect(gameBoardTest.grid[1][2]).toEqual("empty");
        });
    })

    describe(".placeShip", () => {

        test("is a function", () => {
            expect(typeof gameBoardTest.placeShip).toBe("function");
        });
    
        test("to be called", () => {
            expect(gameBoardTest.placeShip("submarine", [3,5],"north")).toBe(undefined);
            expect(placeShipSpy).toHaveBeenCalledWith("submarine", [3,5], "north");
    
            placeShipSpy.mockClear();
        });

      /*   test("updates gameboard", () => {
            expect(gameBoardTest.placeShip("submarine",[3,5],"left")).toBeUndefined();
            expect(gameBoardTest.grid[1][5]).toEqual("S");
            expect(gameBoardTest.grid[2][5]).toEqual("S");
            expect(gameBoardTest.grid[3][5]).toEqual("S");
            placeShipSpy.mockClear();
            });

        test("doesn't place outside gameboard", () => {
            expect(gameBoardTest.placeShip("submarine",[1,1],"down")).toBeUndefined();
            expect(gameBoardTest.grid[1][0]).toEqual("null");
            expect(gameBoardTest.grid[1][1]).toEqual("0");
            expect(gameBoardTest.grid[1][2]).toEqual("0");
            placeShipSpy.mockClear();
        }); */
    });

    describe(".createTileArrayStaticX", () => {
    
        test("is a function", () => {
            expect(typeof gameBoardTest.createTileArrayStaticX).toBe("function");
        });

        test("returns correct array of arrays", () => {
            expect(gameBoardTest.createTileArrayStaticX([3,5],-1, 3)).toStrictEqual([[3,5],[3,4],[3,3]]);
        });
    });     


    describe(".createTileArrayStaticY", () => {
    
        test("is a function", () => {
            expect(typeof gameBoardTest.createTileArrayStaticY).toBe("function");
        });
    
        test("returns correct array of arrays", () => {
            expect(gameBoardTest.createTileArrayStaticY([3,5],-1, 3)).toStrictEqual([[3,5],[2,5],[1,5]]);
        });
    });    



    describe(".validatePlacement", () => {
    
        test("is a function", () => {
            expect(typeof gameBoardTest.validatePlacement).toBe("function");
        });

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

   



    placeShipSpy.mockClear()
    receiveAttackSpy.mockClear()
})