



describe('newGameButton', () => {

        const randomNum = jest
        .fn(() => "null")
        .mockImplementationOnce(() => 3)
        .mockImplementationOnce(() => 4)



    test('create new GameMaster', () => {
    expect(testMaster.player.opponent).toEqual(testMaster.computer)
    expect(testMaster.computer.opponent).toBe(testMaster.player)
   }) 
 
})