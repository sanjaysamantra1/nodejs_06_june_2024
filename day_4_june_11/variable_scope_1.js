var a = 10;
let b = 20;
const c = 30;

function f1() {
    var d = 40;  // Function Scoped Variable
    e = 50;      // Global
    console.log('F1 starts')
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
    console.log('F1 ends')
}
function f2() {
    console.log('F2 starts')
    console.log(a)
    console.log(b)
    console.log(c)
    // console.log(d) // No
    console.log(e); // Yes
    console.log('F2 ends')
}
f1()
f2()

/* Note: When a variable is declared without var/let/const , the scope of that variable is always Global no matter where that variable is declared
 */