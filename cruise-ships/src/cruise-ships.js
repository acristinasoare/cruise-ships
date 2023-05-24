class Ship {
    constructor(startingPort) { 
        this.startingPort = startingPort;
    }

    setSail() {
        this.startingPort = null;
    }
}

module.exports = Ship;