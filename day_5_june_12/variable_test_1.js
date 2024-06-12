function f1() {
    var a = 10;

    if (true) {
        var a = 100;
        console.log('block', a); // 100
    }
    console.log('function ', a);  // 100
}
f1();


function f2() {
    let a = 10;

    if (true) {
        let a = 100;
        console.log('block', a); // 100
    }
    console.log('function ', a);  // 10
}
f2();