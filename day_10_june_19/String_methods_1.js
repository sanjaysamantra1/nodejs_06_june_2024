let str1 = 'hello world';
console.log(str1.length); // 5

console.log(str1.charAt(1)); // e
console.log(str1.at(1)); // e
console.log(str1.charCodeAt(1));  // e (Ascii)

// at() takes both +ve and -ve indexes, charAt() works with only +ve index
console.log(str1.charAt(-2)); // l
console.log(str1.at(-2)); // l

console.log(str1.indexOf('l')); // 2
console.log(str1.indexOf('l',3)); // 3
console.log(str1.lastIndexOf('l')); // 9
