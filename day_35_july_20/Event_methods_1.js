const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('customEvent1', function () {
    console.log('customEvent1 Triggered....')
})
eventEmitter.addListener('customEvent1', function () {
    console.log('customEvent1 Triggered....')
})
eventEmitter.emit('customEvent1');

console.log(events.defaultMaxListeners);
console.log(events.getMaxListeners(eventEmitter));

console.log(eventEmitter.eventNames());
console.log(eventEmitter.getMaxListeners());
console.log(eventEmitter.listenerCount('customEvent1'));
console.log(eventEmitter.listeners('customEvent1'));

