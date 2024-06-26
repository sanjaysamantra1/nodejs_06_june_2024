let arr1 = [10, 50, 20, 40, 30];
arr1.sort();
console.log(arr1);

let arr2 = [10,102,9,8,91,95,105,93,7,5];
arr2.sort(); // string sort
console.log(arr2);

arr2.sort((a,b)=>a-b); // numeric sort(Asc)
console.log(arr2);

arr2.sort((a,b)=>b-a); // numeric sort(Desc)
console.log(arr2)