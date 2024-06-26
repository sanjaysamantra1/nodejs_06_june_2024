let str = 'entertainment';
// output = { e:3 , n:3 , t:3 , r:1....}
let chars = str.split('');

let res = chars.reduce((obj,char) => {
    console.log(obj,char)
    if (obj[char]) {
        obj[char] = obj[char] + 1;
    } else {
        obj[char] = 1;
    }
    return obj;
},{});

console.log(res)