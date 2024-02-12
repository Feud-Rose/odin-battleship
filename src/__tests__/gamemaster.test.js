import GameMaster from "../modules/gamemaster";

const testMaster = new GameMaster("Dave")

describe('GameMaster', () => {

    describe('constructor', () => {
        test('creates player', () => {
        expect(testMaster.player.name).toEqual("Dave")
       }) 
        test('constructor', () => {
        expect(testMaster.computer.name).toEqual("Computer")
       }) 
    })


    describe('.linkPlayers', () => {
        testMaster.linkPlayers()
        test('links player and opponent', () => {
        expect(testMaster.player.opponent).toEqual(testMaster.computer)
        expect(testMaster.computer.opponent).toBe(testMaster.player)
       }) 
     
    })

    



})