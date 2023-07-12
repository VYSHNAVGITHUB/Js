//  arrow function to fibonacci series
// n

fibonacci=nterms=>{
    n1=0
    n2=1
    for(;nterms>0;nterms--){
        console.log(n1);
        n3=n1+n2
        n1=n2
        n2=n3
    }
}
fibonacci(10)