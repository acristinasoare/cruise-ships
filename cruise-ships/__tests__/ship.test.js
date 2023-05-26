const Ship = require('../src/ship.js')
const Port = require('../src/port.js');

describe( Ship, () => {
    it('it returns an object', () => {
        expect(new Ship()).toBeInstanceOf(Object)   
    });

    it('sets the starting port property', () => {
        const startingPort = new Port('Edinburgh');
        const ship = new Ship(startingPort);
        
        expect(ship.currentPort).toBe(startingPort);
    });
});


describe('setSail', () => {
    it('the ship will set sail', () => {
        const port = new Port('Edinburgh')
        const ship = new Ship(port);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    });
});

describe('dock', () => {
    it('the ship will dock at another port', () => {
        const port = new Port('Edinburgh');
        const ship = new Ship(port);
        const newcastle = new Port('Newcastle');
        ship.setSail()
        ship.dock(newcastle);

        expect(ship.currentPort).toBe(newcastle);
    });
});

