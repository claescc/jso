'use strict';

let events = require ('events');

// events emitter
let evEmit = new events.EventEmitter();

// events afvuren -> signalizeren dat er iets gebeurt is 
evEmit.emit('fire'); // still need to add eventhandler for ACTION

// add eventhandler or ACTION  = onlick elke keer wordt het uitgevoerd 
evEmit.on('fire', function (){
    console.log('FIRE call 911!');
});

// vuurt nu telkens functie uit automatisch 
evEmit.emit('fire');

for (let i = 0 ; i <3 ; i++){
    evEmit.emit('fire');
}

console.log('last emit prev');
// add SECOND eventhandler or ACTION  = onlick elke keer wordt het uitgevoerd 
evEmit.on('fire', function (){
    console.log('Ashes Ashes');
});

evEmit.emit('fire');
console.log('last emit extra func');


console.log('long live the mice');
evEmit.emit('muis'); // doesnt work needs Event. on 

evEmit.on('muis', findMouse); // add On to function 
// NOW CALL FUNCTION TO WORK
evEmit.emit('muis');

function findMouse(){
    console.log('run away');
}
