sp=5
for(i=1;i<=4;i++){
    s=''
    for(k=1;k<=sp;k++){
        s=s+" "    
    }
    sp--
    for(j=1;j<=i;j++){
        s+="* "
    }
    console.log(s);
}