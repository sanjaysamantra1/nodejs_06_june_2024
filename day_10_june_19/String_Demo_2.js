// 1. string Literal  2. String Objects

let str1 = 'hello'; // string literal
let str2 = new String('hello'); // String Object
let str3 = new String('hello'); // String Object

console.log(typeof str1); // string
console.log(typeof str2); // Object

console.log(str1 == str2); // true (string object gets typecasted to string literal)
console.log(str2 == str3); // false (reference comparision )

let obj1 = { a: 10, b: 20 }
let obj2 = { a: 10, b: 20 }
console.log(obj1 == obj2); // false - reference compare

let str4 = '2+3+4';
let str5 = new String('2+3+4');
let str6 = str5.valueOf();
console.log(eval(str4));
console.log(eval(str5));
console.log(eval(str6));