// Write your solution in this file!
const employee = {}     //initialized employee object

//empty obj, adds all the properties in employee to new obj, then final property key and value that rep change we wanna make
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]: value});             //returns new object with update key and values
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
         
function deleteFromEmployeeByKey(employee, key) {
    const newObj = Object.assign({}, employee );

    delete newObj[key];

    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}