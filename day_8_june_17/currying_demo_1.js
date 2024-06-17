function add(a, b, c) {
    console.log(a + b + c);
}
add(2, 3, 4); // regular


function sum(a) {
    return function (b) {
        return function (c) {
            console.log(a + b + c)
        }
    }
}
sum(2)(3)(4);



