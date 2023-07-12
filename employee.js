employees=[
    [1,'amal','developer',56000,'kochi',3],
    [2,'anu','tester',16000,'calicut',1],
    [4,'arun','developer',75000,'trissur',5],
    [3,'mega','hr',50000,'kochi',2],
    [5,'rohan','tester',32000,'kochi',2]
]
console.log(employees);

// print the count of employees
console.log(employees.length);
// print names of all employees

// for(i of employees){
//     console.log(i[1]);
// }

console.log(employees.map(i=>i[1]));
// find developers location

// for(i of employees){
//     if(i[2]=='developer'){
//         console.log(i[4]);
//     }
// }
console.log(employees.filter(i=>i[2]=='developer').map(i=>i[4]));
// find the employee have highest salary
console.log(employees.sort((n1,n2)=>n2[3]-n1[3])[0][1]);

// find id of employee with lowest experience

console.log(employees.sort((n1,n2)=>n1[5]-n2[5])[0][0]);

// employees names with below 50000 salary

// for(i of employees){
//     if(i[3]<50000){
//         console.log(i[1]);
//     }
// }
console.log(employees.filter(i=>i[3]<50000).map(i=>i[1]));