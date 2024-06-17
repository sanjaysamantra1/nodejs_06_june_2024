// Benefit Of Arrow Function
class Employee {
    name = 'Sachin';
    age = 45
    greet1 = function () {
        console.log('Hellooooo ', this.name);
    }
    greet2 = () => {
        console.log('Hiiiiiiiii ', this.name);
    }
}
let emp = new Employee();
emp.greet1();  // emp.greet1() , inside greet1() , this = emp obj
emp.greet2();  // emp.greet2() , inside greet2() , this = emp obj

setTimeout( emp.greet1 , 2000 );
setTimeout( emp.greet2 , 4000 );



