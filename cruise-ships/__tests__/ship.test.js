import Ship from '../src/ship.js';

describe( Ship, () => { 
  describe('with ports and an itinerary', () => {
    let edinburgh;
    let newcastle;
    let eastCoastItinerary;
    let ship;
    beforeEach(() => {
      edinburgh = { 
        name:'Edinburgh', 
        ships: [], 
        addShip: jest.fn(), 
        removeShip: jest.fn(),
      }
      newcastle = { 
        name: 'Newcastle', 
        ships: [], 
        addShip: jest.fn(), 
        removeShip: jest.fn(),
      }
      eastCoastItinerary = {
        ports:[edinburgh, newcastle],
      };
      ship = new Ship(eastCoastItinerary);
    })
  
    it('it returns an object', () => {
      expect(ship).toBeInstanceOf(Object)   
    });

    it('takes an itinerary and has a current port property', () => {
      expect(ship.currentPort).toBe(eastCoastItinerary['ports'][0]);
    });
    
    it('has a previous port property', () => {
      expect(ship.previousPort).toBe(null);
      expect(ship.previousPort).toBeFalsy();
    });
    
    it('gets added to current port on instantiation', () => {
      expect(edinburgh.addShip).toHaveBeenCalledWith(ship);
    });

    it('the ship will set sail', () => {
      ship.setSail();
    
      expect(ship.currentPort).toBeFalsy();
      expect(ship.previousPort).toBe(eastCoastItinerary['ports'][0]);
      expect(edinburgh.removeShip).toHaveBeenCalledWith(ship);
    });
    
    it('can\'t set sail further than its itinerary', () => {
      ship.setSail();
      ship.dock();
    
      expect(()=> ship.setSail()).toThrowError('End of itinerary reached');
    });

    it('the ship will dock at the next port in the itinerary', () => {
      ship.setSail()
      ship.dock();
    
      expect(ship.currentPort).toBe(eastCoastItinerary['ports'][1]);
      expect(newcastle.addShip).toHaveBeenCalledWith(ship);
    });
  });
});