const axios = require('axios');

console.log('line-2')

async function getUser(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    console.log('line-7')
    console.log('line-8')
    console.log('line-9')
    console.log('line-10')
}
getUser();

console.log('line-14')
console.log('line-15')
console.log('line-16')