function prime(n){
    for(i=2;i<n;i++){
        if(n%i==0){
            break
        }
        return n==i?"prime":"nonprime"
    }
}
console.log(prime(7));
console.log(prime(10));