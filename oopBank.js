class Bank{
    constructor(acholder,acnumber){
        this.acholder=acholder
        this.acnumber=acnumber
        this.balance=0
    }
    deposit(amount){
        this.amount=amount
        this.balance=this.balance+this.amount
        console.log('your ac ha been credited with amount ',this.amount);
        console.log('the balance of your ac is ',this.balance);
    }
    withdraw(amnt){
        this.amnt=amnt
        if(this.balance<=this.amnt){
            console.log('insufficient balance');
        }
        else{
            this.balace-=this.amnt
            console.log('your ac has beem debited with amount ',this.amnt);
            console.log('the balance in your ac is',this.balance);
        }
    }



}
ac1=new Bank('amal',4555666445)
ac1.deposit(56000)
ac1.withdraw(5000)
ac1.withdraw(60000)
