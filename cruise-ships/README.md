# Cruise-Ships 🛥️🌊🐳🌅

A guided code project written as part of the CommandShift Bootcamp. The aim of the project was to create a JavaScript cruise ship that has the following features
- the cruise ship receives an itinerary of different ports
- it can sail when instructed to do so from one port to the next
- it can dock at the next port in its itinerary
- it is restricted from sailing beyond its final destination
- the ports keep track of the ships that are currently docked  

## Getting started

### Clone the repository

To get started, fork this repository and then clone your own copy using the following command:

- `git clone git@github.com:*your-github-username*/cruise-ships.git`

### Install the project dependencies 

Navigate to the project's repository in your terminal and run the command `npm install` to download the necessary dependencies for this project. Once the installation is complete, you should find a new directory called node-modules in the repository.

### Run the test code 

Execute `npm test` to run the Jest testing framework. All the tests should pass successfully 

### Play Cruise Ships

Open Node REPL in your terminal using `node` command. Copy and paste the following lines of code one by one and press enter after each line:  

  `const Itinerary = require('./src/itinerary.js');`    
  `const Port = require('./src/port.js');`     
  `const Ship = require('./src/ship.js');`    


Next create instance of ports as shown below:      
`const edinburgh = new Port('Edinburgh')`    
`const glasgow = new Port('Glasgow')`    
Add the ports to an itinerary:    
`const tourOfScotland = new Itinerary( edinburgh, glasgow)`    
Create a ship instance with the itinerary you have just created:    
`const ship = new Ship(tourOfScotland)`    


Once you have completed the above steps, you can start giving instructions to your ship to set sail from its initial port and dock at the next port in its itinerary. To view the ships present in a specific port, type *insertPortNameHere*.ships in your command line and press enter.  