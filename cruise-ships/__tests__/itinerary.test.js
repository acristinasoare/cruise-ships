const Itinerary = require('../src/itinerary.js')

describe (Itinerary, () => {
    it('creates a new Itinerary object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    })

    it('has a ports property', () => {
        const edinburgh = jest.fn();
        const newcastle = jest.fn();
        const itinerary = new Itinerary([edinburgh, newcastle]);
        expect(itinerary.ports).toEqual([edinburgh, newcastle]);

    })
});