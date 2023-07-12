for(row=4;row>0;row--){
    s=""
    for(col=1;col<=row;col++){
        if(row==3 & col==2){
            s=s+'  '
        }
        else{
            s=s=s+'* '
        }
        
    }
    console.log(s);
}