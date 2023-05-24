const Ship = require('../src/cruise-ships.js')

describe( Ship, () => {
    it('it returns an object', () => {
        expect(new Ship()).toBeInstanceOf(Object)   
    });

    it('sets the starting port property', () => {
        const ship = new Ship('Edinburgh')
        expect(ship.startingPort).toBe('Edinburgh')
    });
});

