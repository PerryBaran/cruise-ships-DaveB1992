const Port = require('../src/port.js')

describe('port constructor', () => {
    it('returns an object', () => {
        
        expect(new Port('Port')).toBeInstanceOf(Object)
    })
    it('has a name property', () => {
        const myPort = new Port('Amsterdam')

        expect(myPort.name).toBe('Amsterdam')
    })
})  