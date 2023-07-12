a=[10,20,10,20,30,30,20,10,20,30,40]
count={}
a.map(e=>e in count?count[e]+=1:count[e]=1)
console.log(count);