const Ship = require('../src/ship')
const Port = require('../src/port')
const Itinerary = require('../src/itinerary')

describe('constructor', () => {
    it('returns an object', () => {
        const port = new Port('Amsterdam');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship).toBeInstanceOf(Object);
    });

   it('it should have a starting port', () => {
        const port = new Port('Amsterdam');
        const itinerary = new Itinerary([port])
        const ship = new Ship(itinerary);

        expect(ship.currentPort).toBe(port);
   });
});

describe('set sail', () => {
    it('can set sail', () => {
        const amsterdam = new Port('Amsterdam');
        const dover = new Port('Dover');
        const itinerary = new Itinerary([amsterdam, dover]);
        const ship = new Ship(itinerary);
      
        ship.setSail();
      
        expect(ship.currentPort).toBeFalsy();
      });
});

describe('dock', () =>{
    it('can dock at a different port', () => {
        const amsterdam = new Port('Amsterdam');
        const dover = new Port ('Dover');
        const itinerary = new Itinerary([amsterdam, dover])
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(dover);
        expect(amsterdam.ships).toContain(ship)
    });
    it('gets added to the port', () => {
        const amsterdam = new Port('Amsterdam')
        const itinerary = new Itinerary([amsterdam])
        const ship = new Ship(itinerary)

        expect(amsterdam.ships).toContain(ship)
    })
});

describe('can\'t sail anymore', () => {
    it('can\'t sail further than the itinerary', () => {
        const amsterdam = new Port ('Amsterdam');
        const dover = new Port ('Dover');
        const itinerary = new Itinerary ([amsterdam, dover]);
        const ship = new Ship (itinerary);

        ship.setSail();
        ship.dock(); 

        expect(() => ship.setSail()).toThrowError('Reached the end of the Itinerary!')
    });
});