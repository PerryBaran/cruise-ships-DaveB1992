const Itinerary = require('../src/itinerary')
const Port = require('../src/port.js')

describe('itinerary constructor', () => {
    it('it returns an object', () => {
        
        expect(new Itinerary('Itinerary')).toBeInstanceOf(Object);
    });
    it('it has the ports property', () => {
        const amsterdam = new Port('Amsterdam');
        const dover = new Port ('Dover')

        const itinerary = new Itinerary([amsterdam, dover])

        expect(itinerary.ports).toEqual([amsterdam, dover])
    });
});



