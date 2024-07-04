let args = process.argv.slice(2);
console.log(args);

let obj = {}
for(ele of args){
    let arr = ele.split('=');
    let key = arr[0];
    let val = arr[1];
    obj[key] = val;
}
console.log(obj)