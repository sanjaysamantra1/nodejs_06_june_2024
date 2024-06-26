const months = ["Mar", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

let arr = [10,50,20,40,30];
let res = arr.toSorted((a,b)=>b-a);
console.log(arr , res)