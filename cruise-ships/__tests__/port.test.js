const Port = require('../src/port');

describe (Port, () => {
    it('it returns an object', () => {
        expect(new Port()). toBeInstanceOf(Object)
    });

    it('sets the name property', () => {
        const port = new Port('Edinburgh');
        expect(port.name).toBe('Edinburgh');
    });
});

describe ('addShip', () => {
    it('adds a ship to the port', () => {
        const edinburgh = new Port('Edinburgh');
        const ship = jest.fn();

        edinburgh.addShip(ship);

        expect(edinburgh.ships).toContain(ship);

    });
});

describe('removeShip', () => {
    it('removes a ship from the port', () => {
        const edinburgh = new Port('Edinburgh');
        const ship1 = jest.fn();
        const ship2 = jest.fn();
        const ship3 = jest.fn();

        edinburgh.addShip(ship1);
        edinburgh.addShip(ship2);
        edinburgh.addShip(ship3);

        edinburgh.removeShip(ship2);

        expect(edinburgh.ships).toEqual([ship1, ship3]);
    });
});



