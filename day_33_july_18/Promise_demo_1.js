function add(a, b) {
    let result;
    result = a + b;
    return result;
}
let addResult = add(2, 3); // returns value
console.log('addition result is ', addResult);

let maxVal = Math.max(10, 20, 30, 50, 40); // returns value
console.log('max value is ', maxVal);

let userPromise = fetch('https://jsonplaceholder.typicode.com/users/1');
console.log(userPromise);
// How to get Data from a promise Object (a.then() b.await)
// then() is a higherOrder function(cb1,cb2)
userPromise.then(
    function (response) {
        console.log('response from API')
    },
    function (err) {
        console.log(err)
    },
)
console.log('I am at line-24')
console.log('I am at line-25')
console.log('I am at line-26')
console.log('I am at line-27')