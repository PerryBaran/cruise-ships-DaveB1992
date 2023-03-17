const ship = require('../src/ship.js')

describe('constructor', () => {
    it('returns an object', () => {
        expect( new ship('ship')).toBeInstanceOf(Object)
    })
})