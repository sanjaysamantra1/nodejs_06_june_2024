let a = 10;

function f1() {  // impure = updating the data outside its scope
    a = 15;
    console.log(a)
}


function f2(a, b) {  // 1. yes  2. No
    console.log(a + b); // impure
}

function f3(a, b) {  // 1. yes. 2. yes  3. No
    console.log(a + b)
    return 'hello';
}

function mul(x, y) { // Pure  - 1.yes 2.yes  3.yes
    return x * y;
}
let mulResult = mul(4,5);