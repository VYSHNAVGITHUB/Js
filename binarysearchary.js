a=[1,3,5,8,6,7]
a.sort((n1,n2)=>n1-n2)
e=13
flag=0
lower=0
upper=a.length-1
count=0
while(lower<=upper){
    count++
    midindex=Math.floor((lower+upper)/2)
    if(e==a[midindex]){
        flag=1
        break
    }
    else if(e>a[midindex]){
        lower=midindex+1
    }
    else if(e<a[midindex]){
        upper=midindex-1
    }
}
flag==0?console.log("not found"):console.log("present");
console.log(count);