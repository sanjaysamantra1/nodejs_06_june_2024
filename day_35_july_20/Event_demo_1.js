const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('customEvent1', function () {
    console.log('customEvent1 Triggered....')
})
eventEmitter.emit('customEvent1');

eventEmitter.on('customEventWithParams', function (name, add) {
    console.log(`A custom event with params triggered, name is ${name} age is ${add}`);
    return 10;
})
eventEmitter.addListener('customEventWithParams',  (name, add)=> {
    console.log(`A custom event with params triggered, name is ${name} age is ${add}`)
})
eventEmitter.emit('customEventWithParams', 'Sanjay', 'Bangalore');

console.log(events.defaultMaxListeners)

