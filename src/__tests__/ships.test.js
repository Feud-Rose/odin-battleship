import Ship from "../modules/ships"


const testShip = new Ship('submarine', 3)

test('Ship class sends correct object', () => {
    expect(testShip).toEqual({
    status: 'submarine',
    size: 3,
    hits: 0,
    sunk: false,
    })
})

test('Ship has hit method', () => {
    expect(typeof testShip.hit).toBe("function");
})

test('Ship has isSunk is false by default', () => {
    expect(testShip.isSunk()).toBe(false);
})

test('Ship has is sinkShip method', () => {
    expect(typeof testShip.sinkShip).toBe("function");
})