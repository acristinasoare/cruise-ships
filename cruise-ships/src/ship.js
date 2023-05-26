const Port = require('./port.js')

class Ship {
    constructor(Port) { 
        this.currentPort = Port;
    }

    setSail() {
        this.currentPort = null;
    }

    dock(Port) {
        this.currentPort = Port;

    }
}

module.exports = Ship;