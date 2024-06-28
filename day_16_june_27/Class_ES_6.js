class Student {
    constructor(roll, name, course, trainer) {
        this.roll = roll;
        this.name = name;
        this.course = course;
        this.trainer = trainer;
    }
}
let std1 = new Student(101, 'Praveen', 'NodeJS', 'Sanjay');
let std2 = new Student(102, 'Geeeta', 'Core Java', 'Harikrishna');
let std3 = new Student(103, 'Manoj', 'ReactJS', 'Sudhakar');
console.log(std1)
console.log(std2)
console.log(std3)