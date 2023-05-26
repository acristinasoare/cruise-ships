const Port = require('./port.js')

class Ship {
    constructor() { 
        this.startingPort = Port;
        this.currentPort = Port;
    }

    setSail() {
        this.startingPort = null;
        this.currentPort = null;
    }

    dock(Port) {
        this.startingPort = null;
        this.currentPort = Port;

    }
}

module.exports = Ship;