arr = [10, 20, 30, 40, 50, 10, 30, 50];
let output = {};
for (ele of arr) {
    if (output[ele]) {
        output[ele]++
    } else {
        output[ele] = 1;
    }
}
console.log(output)