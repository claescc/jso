var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
//var listner1 = function listner1() {
//   console.log('listner1 executed.');};

function listner1() {
  console.log('listner1 executed.');
};


// listener #2
var listner2 = function listner2() {
  console.log('listner2 executed.');
};

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

// tel het aantal eventhandlers --> listener.count
// wat gaan we tellen: (eventEmitter,'connection');
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function REMOVE REMOVE 
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');



eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

console.log("Program Ended.");