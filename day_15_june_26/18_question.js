let employees = [
    { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 103, name: "Geeta", sal: 5500, gender: "female" },
    { eId: 102, name: "deepak", sal: 6000, gender: "male" },
    { eId: 104, name: "reena", sal: 5000, gender: "female" }
]
// group by gender , output = { 'male':[] , 'female':[]}
// group by salary , output = { 5000:[{},{}] , 5500:[{}] , 6000:[{}]}
function groupBy(employees, fieldName) {
    let obj = {};
    for (let emp of employees) {
        let fieldVal = emp[fieldName];
        if (obj[fieldVal]) {
            obj[fieldVal].push(emp);
        } else {
            obj[fieldVal] = [];
            obj[fieldVal].push(emp);
        }
    }
    return obj;
}
let result1 = groupBy(employees, 'gender');
console.log(result1)
let result2 = groupBy(employees, 'sal');
console.log(result2)
