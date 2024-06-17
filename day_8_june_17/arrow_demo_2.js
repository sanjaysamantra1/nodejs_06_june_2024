// Benefit Of Arrow Function
class Employee {
    name = 'Sachin';
    age = 45;
    displayInfo1 = function () { // regular, this = how it is called
        console.log(this.name + " is " + this.age + " years old");
    }
    displayInfo2 = () => {  // this = emp (all the time)
        console.log(this.name + " is " + this.age + " years old");
    }
}
let emp = new Employee();
emp.displayInfo1();
emp.displayInfo2();

let a = emp.displayInfo1;
// a();
console.log(this); // {}  

let b = emp.displayInfo2;
b();

let c = b;
c();

let d = c;
d();


