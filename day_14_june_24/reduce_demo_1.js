let arr = [10, 20, 30, 40, 50];

let sum = arr.reduce((prev, curr) => {
    console.log(prev,curr)
    return prev + curr;
});
console.log(sum)