const Port = require('../src/port');

describe (Port, () => {
    it('it returns an object', () => {
        expect(new Port()). toBeInstanceOf(Object)
    });

    it('sets the name property', () => {
        const port = new Port('Edinburgh')
        expect(port.name).toBe('Edinburgh');
    })
});

