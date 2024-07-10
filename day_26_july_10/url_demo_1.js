const url = require('url');

let urlStr = 'http://localhost:8080/default.htm?year=2023&month=february';
let urlObj = url.parse(urlStr, true);
console.log(urlObj)

let myURLObj = {
    protocol: 'https',
    hostname: 'example.com',
    pathname: 'some/path',
    query: {
        country: 'india',
        state: 'karnataka',
    }
}
let myURLStr = url.format(myURLObj);
console.log(myURLStr)