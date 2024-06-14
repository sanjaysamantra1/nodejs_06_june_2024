// Function Declaration
function add(a, b) {
    console.log(a + b);
}
add(2, 3);
add(3,4);
add(4,5);


// Function Expressions
var sub = function (a, b) {
    console.log(a - b);
}
sub(10, 4)


// Self Invoked (this function can be invoked only 1)
// to execute a block of code only 1 on page load
(function(a,b){
    console.log(a*b)
})(4,5);


// Arrow Function
var div = (a, b)=> {
    console.log(a - b);
}
div(10, 4);

