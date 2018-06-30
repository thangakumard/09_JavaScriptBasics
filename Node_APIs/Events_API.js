//CLASS
// A class is a container for properties or functions which we call methods
// define class in upper case.
const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener called !', arg);
});

//Raise an event
emitter.emit('messageLogged');
emitter.emit('messageLogged',{id:1, url: 'http//'});
