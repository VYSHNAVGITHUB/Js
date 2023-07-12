// object oriented programming

class Person{
    constructor(name,age,place){
        this.name= name
        this.age= age
        this.place= place

    }
    printData(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.place);
    }
}

pe1=new Person('anu',23,'kochi')
pe1.printData()
