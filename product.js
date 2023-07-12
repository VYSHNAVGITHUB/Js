products=[
    [1,'oreo',45,25],
    [2,'parle-g',10,45],
    [3,'tiger',20,15],
    [4,'dark fantacy',50,10],
    [5,'hide&seek',30,20],
]
// find all products name
console.log(products.map(i=>i[1]));

// find the name of which have 35 greater price
console.log(products.filter(i=>i[2]>35).map(n=>n[1]));

// find details of tiger
console.log(products.filter(i=>i[1]=="tiger"));

// find stoke value of hide&seek
console.log(products.filter(i=>i[1]=='hide&seek').map(i=>i[3]));

// which product have greatest price
// console.log(products.sort((n1,n2)=>n2[2]-n1[2])[0][1]);

console.log(products.reduce((n1,n2)=>n1[2]>n2[2]?n1:n2)[1]);

// sum of stoke value
console.log(products.map(i=>i[2]).reduce((n1,n2)=>n1+n2));

// check any product with price 10
console.log(products.some(i=>i[2]==10));
