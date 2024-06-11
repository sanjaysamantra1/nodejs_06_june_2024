let a = 10;
console.log('Global ', a); // Global

function f1() {
    let a = 100;
    console.log('function ', a);  // Function

    if (true) {
        let a = 1000;
        console.log('Block ', a); // Block
    }
}
f1();
