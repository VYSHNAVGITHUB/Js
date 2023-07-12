// without argument

function add(){
    n1=9
    n2=7
    console.log(n1+n2);
}
add()

// with argument

function add(a1,a2){
    console.log(a1+a2);
}
add(100,200)

// with argument and return
function add(b1,b2){
    return b1+b2   
}
out=add(400,200)
console.log(out);