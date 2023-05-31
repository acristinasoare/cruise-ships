# Cruise-Ships 🛥️🌊🐳🌅

A guided code project written as part of the CommandShift Bootcamp. The aim of the project was to create a JavaScript cruise ship that has the following features
- the cruise ship receives an itinerary of different ports
- it will sail when instructed to do so from one port to the next
- it will dock at the next port
- it cannot sail past its final destination
- the ports keep track of the docked ships 

## Getting started

### Clone the repository

First up, create a fork of this repo. 

Then clone your copy of the repo: 

- `git clone git@github.com:*your-github-username*/cruise-ships.git`

### Install the project dependencies 

In your terminal change directory into the project's repository. Run the `npm install` to download the dependencies for this project. Once it has completed, you should have a new `node-modules` directory in the repository. 

### Run the test code 

Run `npm test` to run Jest. All the tests should pass. 

### Play Cruise Ships

Open Node REPL in your terminal using `node` command. 

Copy  `const Itinerary = require('./src/itinerary.js');`   
      `const Port = require('./src/port.js');`   
      `const Ship = require('./src/ship.js');`  
and return.   

First create several instances of ports like so:    
`const edinburgh = new Port('Edinburgh')`    
`const glasgow = new Port('Glasgow')`    
Add your ports to an itinerary:    
`const tourOfScotland = new Itinerary( edinburgh, glasgow)`    
Create an instance of a ship with the itinerary you have just created:    
`const ship = new Ship(tourOfScotland)`    


Once you've done all of the above, you can start instructing your ship to set sail from its starting port and to dock at the next port in its itinerary. To check what ships are present in a port type `port.ships` into your command line and return. 