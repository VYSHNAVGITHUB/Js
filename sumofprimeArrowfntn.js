// arrow function to find sum of prime numbers in a range -return
// r1 r2

prime=(r1,r2)=>{
    sum=0
    for(;r1<=r2;r1++){
        for(i=2;i<r1;i++){
            if(r1%i==0){
                break
            }
        }
        if(i==r1){
            sum+=r1
        }
    }
    return sum
}

console.log(prime(1,10));
console.log(prime(5,10));