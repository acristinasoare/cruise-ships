const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js');

describe( Ship, () => {
    it('it returns an object', () => {
        const edinburgh = new Port('Edinburgh');
        const newcastle = new Port('Newcastle');
        const eastCoastItinerary = new Itinerary([edinburgh, newcastle]);
        const ship = new Ship(eastCoastItinerary);

        expect(ship).toBeInstanceOf(Object)   
    });

    it('takes an itinerary and has a current port property', () => {
        const edinburgh = new Port('Edinburgh');
        const newcastle = new Port('Newcastle');
        const eastCoastItinerary = new Itinerary([edinburgh, newcastle]);
        const ship = new Ship(eastCoastItinerary);

        expect(ship.currentPort).toBe(eastCoastItinerary['ports'][0]);
    });

    it('has a previous port property', () => {
        const edinburgh = new Port('Edinburgh');
        const newcastle = new Port('Newcastle');
        const eastCoastItinerary = new Itinerary([edinburgh, newcastle]);
        const ship = new Ship(eastCoastItinerary);

        expect(ship.previousPort).toBe(null);
        expect(ship.previousPort).toBeFalsy();
    })

    it('gets added to current port on instantiation', () => {
        const edinburgh = new Port('Edinburgh');
        const newcastle = new Port('Newcastle');
        const eastCoastItinerary = new Itinerary([edinburgh, newcastle]);
        const ship = new Ship(eastCoastItinerary);

        expect(edinburgh.ships).toContain(ship);
    })
});


describe('setSail', () => {
    it('the ship will set sail', () => {
        const edinburgh = new Port('Edinburgh');
        const newcastle = new Port('Newcastle');
        const eastCoastItinerary = new Itinerary([edinburgh, newcastle]);
        const ship = new Ship(eastCoastItinerary);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(eastCoastItinerary['ports'][0]);
    });

    it('the port from which the ship has sailed from will no longer contain the ship into its ships property', () => {
        const edinburgh = new Port('Edinburgh');
        const newcastle = new Port('Newcastle');
        const eastCoastItinerary = new Itinerary([edinburgh, newcastle]);
        const ship = new Ship(eastCoastItinerary);

        ship.setSail();
        
        expect(edinburgh.ships).not.toContain(ship);
    });

    it('can\'t set sail further than its itinerary', () => {
        const edinburgh = new Port('Edinburgh');
        const newcastle = new Port('Newcastle');
        const eastCoastItinerary = new Itinerary([edinburgh, newcastle]);
        const ship = new Ship(eastCoastItinerary);
        
        ship.setSail();
        ship.dock();

        expect(()=> ship.setSail()).toThrowError('End of itinerary reached');
    });

    
});

describe('dock', () => {
    it('the ship will dock at the next port in the itinerary', () => {
        const edinburgh = new Port('Edinburgh');
        const newcastle = new Port('Newcastle');
        const eastCoastItinerary = new Itinerary([edinburgh, newcastle]);
        const ship = new Ship(eastCoastItinerary);
        ship.setSail()
        ship.dock();

        expect(ship.currentPort).toBe(eastCoastItinerary['ports'][1]);
    });
});



