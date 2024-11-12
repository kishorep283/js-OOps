class Account{
    #balance;
    constructor(balance){
        this.#balance=balance;
    }
    deposit(money){
        console.log("money deposited succesfully");
        console.log(this.#balance+=money);
    }
    withdraw(money){
        if(this.#balance > money){
              this.#balance -= money;
            console.log("money withdraw successfully");
        }
        else{
            console.log("insufficient funds");
        }
    }
}
var acc= new Account(10000);
acc.deposit(1000);
acc.withdraw(20000);
