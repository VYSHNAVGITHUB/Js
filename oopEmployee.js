class Employee{
    constructor(name,age,place,id,designation,salary){
        this.name= name
        this.age= age
        this.place= place
        this.id= id
        this.designation= designation
        this.salary= salary

    }
    printData(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.place);
        console.log(this.id);
        console.log(this.designation);
        console.log(this.salary);
    }
}

pe1=new Employee('anu',23,'kochi','AP4578','developer',25000)
pe1.printData()