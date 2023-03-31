const Port = require('../src/port.js')

describe('port constructor', () => {
    describe('has ports and ships', () => {
        let port
        let theBlackPearl
        let theFlyingDutchman
        
        beforeEach(() => {
            port = new Port ('Amsterdam')
            ship = jest.fn()
            theBlackPearl = jest.fn()
            theFlyingDutchman = jest.fn()
        })
        it('returns an object', () => {
            
            expect(new Port()).toBeInstanceOf(Object)
        })
        it('has a name property', () => {
    
            expect(port.name).toBe('Amsterdam')
        })
        it('can add a ship', () => {
    
            port.addShip(ship)
    
            expect(port.ships).toContain(ship)
        })
        it('can remove a ship', () => {

            const port = new Port('Amsterdam')
            const theBlackPearl = {}
            const theFlyingDutchman = {}

            port.addShip(theBlackPearl)
            port.addShip(theFlyingDutchman)
            port.removeShip(theBlackPearl)
    
            expect(port.ships).toEqual([theBlackPearl])
        })  
    }) 
})  