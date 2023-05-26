const Ship = require('../src/ship.js')
const Port = require('../src/port.js');

describe( Ship, () => {
    it('it returns an object', () => {
        expect(new Ship()).toBeInstanceOf(Object)   
    });

    it('sets the starting port property', () => {
        const ship = new Ship(Port);
        
        expect(ship.startingPort).toBe(Port);
    });
});


describe('setSail', () => {
    it('the ship will set sail', () => {
        const ship = new Ship(Port);

        ship.setSail();

        expect(ship.startingPort).toBeFalsy();
        expect(ship.currentPort).toBeFalsy();
    });
});

describe('dock', () => {
    it('the ship will dock at another port', () => {
        const ship = new Ship(Port);
        ship.setSail()
        const dockingPort = new Port('Newcastle');
        ship.dock(dockingPort);

        expect(ship.currentPort).toBe(dockingPort);
        expect(ship.startingPort).toBeFalsy();
    });
});

