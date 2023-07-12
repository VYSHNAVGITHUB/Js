// a=[1,3,8,6,5,7]
// e=9
// flag=0
// for(i of a){
//     if(i==e){
//         flag=1
//         break
//     }
// }
// flag==0?console.log("not present"):console.log("present");
a=[1,3,8,6,5,7]
e=9
flag=0
count=0
for(i of a){
    count++
    if(i==e){
        flag=1
        break
    }
}
flag==0?console.log("not present"):console.log("present");
console.log(count);