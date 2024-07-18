let userPromise = fetch('https://jsonplaceholder.typicode.com/users/1');
console.log(userPromise);
// How to get Data from a promise Object (a.then() b.await)
// then() is a higherOrder function(cb1,cb2)
userPromise.then(
    function (response) {
        console.log(response); // response is object, doesn't have final data
        let jsonPromise = response.json(); // json() returns promise
        jsonPromise.then(
            function (result) {
                console.log(result)
            },
            function (err2) {
                console.log(err2)
            }
        )
    },
    function (err) {
        console.log(err)
    }
)
// fetch() is a predefined method of Javascript & NodeJS