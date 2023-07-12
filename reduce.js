// reduce
a=[1,2,4,7,5,4,22,98,0,12]
// sum
console.log(a.reduce((n1,n2)=>n1+n2));
// greatest
console.log(a.reduce((n1,n2)=>n1>n2?n1:n2));
// lowest
console.log(a.reduce((n1,n2)=>n1<n2?n1:n2));