class Person{
    setPerson(name,age,place){
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
class Student extends Person{
    setStudent(rollno,mark){
        this.rollno=rollno
        this.mark=mark
        console.log(this.rollno,this.mark);
    }

} 
st=new Student()
st.setPerson('ARUN',25,'koch')
st.printData()
st.setStudent(6,74)
console.log(st);


