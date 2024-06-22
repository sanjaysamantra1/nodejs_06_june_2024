let arr = [10, 20, 30];

arr.push(40);
console.log('After Push', arr);
arr.pop();
console.log('After pop', arr);
arr.unshift(40)
console.log('After unshift', arr);
arr.shift();
console.log('After shift', arr);

// splice(ind,#elements to remove,what to insert)
// arr = [10,20,30]
arr.splice(1,1,15,25);
console.log(arr);
arr.splice(2,0,20);
console.log(arr);