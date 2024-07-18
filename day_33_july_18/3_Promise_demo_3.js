let userPromise = fetch('ttps://jsonplaceholder.typicode.com/users/1');

// How to get data from a promise object ( 1.then()  2.await)
try {
    let response = await userPromise;
    let finalResponse = await response.json();
    console.log(finalResponse)
} catch (err) {
    console.log('something went wrong')
}