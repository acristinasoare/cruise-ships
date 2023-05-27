const Itinerary = require('../src/itinerary.js')
const Port = require('../src/port.js')

describe (Itinerary, () => {
    it('creates a new Itinerary object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    })

    it('has a ports property', () => {
        const edinburgh = new Port('Edinburgh');
        const newcastle = new Port('Newcastle')
        const itinerary = new Itinerary([edinburgh, newcastle]);
        expect(itinerary.ports).toEqual([edinburgh, newcastle]);

    })
});