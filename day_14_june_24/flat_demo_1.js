let arr1 = [10, 20, [30, 40, [50, 60, [70, 80, [90, 100]]]]];
console.log(arr1.length , arr1);

let arr2 = arr1.flat();   // 1 level flat
console.log(arr2.length);

let arr3 = arr1.flat(2);   // 2 level flat
console.log(arr3.length);

let arr4 = arr1.flat(Infinity);   // n level flat
console.log(arr4.length);
console.log(arr1.length); //3
