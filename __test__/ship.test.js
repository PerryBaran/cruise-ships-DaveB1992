const Ship = require('../src/ship')
const Port = require('../src/port')

describe('constructor', () => {
    it('returns an object', () => {

        expect(new Ship()).toBeInstanceOf(Object)
    })
   it('it should have a current port', () => {
        const port = new Port('Amsterdam')
        const ship = new Ship(port)

        expect(ship.currentPort).toBe('Amsterdam')
   })
})

describe('set sail', () => {
    it('it can set sail', () => {
        const port = new Port('Amsterdam')
        const ship = new Ship(port)
        ship.setSail()

        expect(ship.currentPort).toBeFalsy()
    })
})

describe('dock', () =>{
    it('it can dock at another port', () => {
        const amsterdam = new Port('Amsterdam')
        const ship = new Ship(amsterdam)

        const dover = new Port ('Dover')
        ship.dock(dover)

        expect(ship.currentPort).toBe(dover)
    })
})