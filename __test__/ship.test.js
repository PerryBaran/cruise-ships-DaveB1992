const Ship = require('../src/ship')
const Port = require('../src/port')
const Itinerary = require('../src/itinerary')

describe('ship', () => {

    describe('has ports and itinerarys', () => {
        let ship
        let amsterdam
        let dover
        let itinerary 

        beforeEach(() => {
        amsterdam = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: 'Amsterdam',
            ships: []
        }
        
        dover = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: 'Dover',
            ships: []
        }
        itinerary = new Itinerary([amsterdam, dover])
        ship = new Ship(itinerary)

        })
        
        it('returns an object', () => {
            expect(ship).toBeInstanceOf(Object)
        })

        it('it should have a starting port', () => {

             expect(ship.currentPort).toBe(amsterdam)
        })

        it('can set sail', () => {
    
            ship.setSail()
          
            expect(ship.currentPort).toBeFalsy()
            expect(amsterdam.ships).not.toContain(ship)
            
          })
          it('gets added to the port on instantiation ', () => {

              expect(amsterdam.addShip).toHaveBeenCalledWith(ship)
          })

          it('can dock at a different port', () => {

              ship.setSail()
              ship.dock()
              
              expect(ship.currentPort).toBe(dover)
              expect(amsterdam.removeShip).toHaveBeenCalledWith(ship)
        })

   })

})

describe('can\'t sail anymore', () => {
    it('can\'t sail further than the itinerary', () => {
        const amsterdam = new Port ('Amsterdam')
        const dover = new Port ('Dover')
        const itinerary = new Itinerary ([amsterdam, dover])
        const ship = new Ship (itinerary)

        ship.setSail()
        ship.dock()

        expect(() => ship.setSail()).toThrowError('Reached the end of the Itinerary!')
    })
})