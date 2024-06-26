let arr1 = [10, 20, [30, 40, [50, 60, [70, 80, [90, 100]]]]];

let arr2 = []
for (let ele of arr1) {
    if (Array.isArray(ele)) {
        arr2 = arr2.concat(...ele)
    } else {
        arr2.push(ele);
    }
}
console.log(arr2);