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


describe('setSail', () => {
    it('the ship will set sail', () => {
        const ship = new Ship('Dover');

        ship.setSail();

        expect(ship.startingPort).toBeFalsy();
    });
})
