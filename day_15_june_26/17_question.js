let employees = [
    { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 103, name: "Geeta", sal: 5500, gender: "female" },
    { eId: 102, name: "deepak", sal: 6000, gender: "male" },
    { eId: 104, name: "reena", sal: 8000, gender: "female" }
]
let departments = [
    { eId: 104, dept: "marketing" },
    { eId: 102, dept: "HR" },
    { eId: 101, dept: "sales" },
    { eId: 103, dept: "ProdDev" }
]

let newEmployees = employees.map(emp => {
    // find the Dept info for this employee
    let deptObj = departments.find(dept => dept.eId === emp.eId);
    emp.dept = deptObj.dept;
    return emp;
});
console.log(newEmployees);