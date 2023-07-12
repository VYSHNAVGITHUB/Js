products=[
    {pid:1000,pname:"samsung",network:'4g',price:12000,display:"lcd"},
    {pid:1001,pname:"oppo",network:'4g',price:8000,display:"lcd"},
    {pid:1002,pname:"apple",network:'5g',price:75000,display:"led"},
    {pid:1003,pname:"nokia",network:'5g',price:20000,display:"led"}
]
console.log(products);

// print all products name

console.log(products.map(i=>i.pname));

// name of mobiles with lcd display
console.log(products.filter(n=>n.display=="lcd").map(i=>i.pname));

// find id of 5g mobles
console.log(products.filter(n=>n.network=="5g").map(i=>i.pid));

// find costly mobile name

console.log(products.reduce((n1,n2)=>n1.price>n2.price?n1:n2).pname);
