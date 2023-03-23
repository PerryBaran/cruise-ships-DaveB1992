const Itinerary = require('../src/itinerary')

describe('itinerary constructor', () => {
    it('it returns an object', () => {
        
        expect(new Itinerary('Itinerary')).toBeInstanceOf(Object)
    })
})