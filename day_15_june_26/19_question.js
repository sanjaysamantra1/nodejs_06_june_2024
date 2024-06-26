let firstArray = [2, 2, 4, 1];
let secondArray = [1, 2, 0, 2];

let result = [];
for (ele of firstArray) {
    if (secondArray.includes(ele) && !result.includes(ele)) {
        result.push(ele)
    }
}
console.log(result)
