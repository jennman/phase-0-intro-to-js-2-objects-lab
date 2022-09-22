// Write your solution in this file!
const employee = {};
function updateEmployeeWithKeyAndValue(employee,key,value){
    const newObject = {...employee};
    newObject[key] = value ;
    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    const newObject = employee;
    newObject[key] = value;
    return newObject;
}

function deleteFromEmployeeByKey(employee, key){
    const newObject = {...key};
    delete deleteFromEmployeeByKey[key];
    return newObject;

}