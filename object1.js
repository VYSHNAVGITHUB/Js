student={name:'anu',age:20,place:'kochi'}
console.log(student);

// access data
console.log(student['age']);
console.log(student.name);

// create new data
student['phn']=8574650256
student.desig='developer'

console.log(student);

// update
student['age']=21
student.place='calicut'
console.log(student);

// key check
console.log('place' in student);

for(i in student){
    console.log(student[i]);
}