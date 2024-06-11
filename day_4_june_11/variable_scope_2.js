function f1() {
    if (true) {
        var a = 10;  // Declared inside a block, scope - function
        console.log('Block ', a);
    }
    console.log('Function ', a); // 
}
f1();

/* Note: When a var variable is declatred inside a block, its scope is not block, its scope is function */

function f2() {
    if (true) {
        let x = 10;  // Declared inside a block, scope - block
        console.log('Block ', x);
    }
    console.log('Function ', x); // 
}
f2();

