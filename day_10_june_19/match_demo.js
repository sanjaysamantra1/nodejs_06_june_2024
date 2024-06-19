let str1 = 'The rain in SPAIN stays mainly in the plain';
let result1 = str1.match(/ain/gi);
console.log(result1);

let str2 = 'Ram & Hari are 2 friends. Ram is 25 and Hari is 24 years old';
let result2 = str2.match(/[0-9]{1,2}/g);
console.log(result2)