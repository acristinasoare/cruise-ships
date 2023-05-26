const Port = require('./port.js');

class Itinerary {
    constructor(Port) {
        this.ports = Port;     
    }
}

module.exports = Itinerary;