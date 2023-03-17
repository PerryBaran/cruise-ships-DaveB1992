const Ship = require('../src/ship.js')

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Ship('Ship')).toBeInstanceOf(Object)
    })
   it('has a starting port', () => {
        const myShip = new Ship('Dover')
        expect(myShip.startingPort).toBe('Dover')
   })
})