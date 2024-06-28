function add(a,b){
    console.log(a+b)
}
add(2,3);

// Structure
function Trainer(name, course, time) {  // constructor function (class)
    this.name = name;
    this.course = course;
    this.time = time;
}
let trainer1 = new Trainer('sanjay', 'NodeJS', '8.00 PM')
let trainer2 = new Trainer('Satish Gupta', 'Python', '7.00 AM')
let trainer3 = new Trainer('Harikrishna', 'Core Java', '11.00 AM')
console.log(trainer1)
console.log(trainer2)
console.log(trainer3)