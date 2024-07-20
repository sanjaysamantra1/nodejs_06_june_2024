const { EventEmitter } = require('events');
const eventObj = new EventEmitter();

const cars = ['tata', 'honda', 'maruti'];

eventObj.on('addFirst', (...arr) => {
    cars.unshift(...arr);
    console.log(cars)
})
eventObj.on('addLast', (...arr) => {
    cars.push(...arr);
    console.log(cars)
})
eventObj.on('deleteFirst', () => {
    cars.shift();
    console.log(cars)
})
eventObj.on('deleteLast', () => {
    cars.pop();
    console.log(cars)
})

eventObj.emit('addLast', 'toyota','hundai','mahindra');
eventObj.emit('deleteFirst');