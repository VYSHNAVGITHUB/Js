class A{
    methoda(){
        console.log('inside A');
    }
}
class B extends A{
    methodb(){
        console.log('inside B');
    }
}
class C extends B{
    methodc(){
        console.log('inside C');
    }
}
obj=new C()
obj.methoda()
obj.methodb()
obj.methodc()