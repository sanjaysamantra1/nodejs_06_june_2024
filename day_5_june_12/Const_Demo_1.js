var a = 10;
let b = 20;
const c = 30;

a = 15;
b = 25;
// c = 35;
console.log(a, b, c);

const obj = { x: 100, y: 200, z: 300 };
obj.x = 150;  // yes
obj.y = 250; // yes
console.log(obj)
// obj = {};  // No

const arr = [10, 20, 30];
arr.push(40); // Yes
console.log(arr)
// arr = []; // No
