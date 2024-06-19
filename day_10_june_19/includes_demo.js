let str = 'It is nodejs session';

console.log(str.indexOf('is')); // 3 
console.log(str.indexOf('nodejs')); // 6 
console.log(str.indexOf('reactjs')); // -1 

console.log(str.includes('nodejs'))
console.log(str.includes('reactjs'))