let cars = ['Tata', 'Honda', 'Maruti', 'Toyota', 'Hundai'];

// 1. for loop
for (let i = 0; i < cars.length; i++) {
    console.log(i, cars[i]);
}

// 2. for-in loop
for (let i in cars) {
    console.log(i, cars[i])
}

// 3. for-of loop
for (let car of cars) {
    console.log(car)
}

// 4. forEach()
cars.forEach(function (a,b,c) {
    console.log(a,b,c)
}) 

// forEach(CallBack) - Higher Order 
