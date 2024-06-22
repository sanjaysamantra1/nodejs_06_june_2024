let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];
// find the employee whose sal is 8000
let res1 = employees.find((emp) => emp.sal === 8000);
console.log(res1);

// at what index the employee with sal 8000 is present
let res2 = employees.findIndex((emp) => emp.sal === 8000);
console.log(res2);

// find the first male employee in this array
let firstMaleEmp = employees.find(emp => emp.gender === 'male');
console.log(firstMaleEmp)

// find the last male employee in this array
let lastMaleEmp = employees.findLast(emp => emp.gender === 'male');
console.log(lastMaleEmp)

// find all the male employees
let allMaleEmps = employees.filter(emp => emp.gender === 'male');
console.log(allMaleEmps)