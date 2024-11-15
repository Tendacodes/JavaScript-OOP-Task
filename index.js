class Account {
    constructor(initialBalance = 0) {
        this.balance = initialBalance; 
    }

 
    getBalanceInfo() {
        return `Cari balans: ${this.balance}`;
    }
}


class BankAccount extends Account {
    
    constructor(initialBalance) {
        super(initialBalance); 
    }

 
    cashIn(amount) {
        if (amount > 0) {
            this.balance += amount; 
        } else {
            console.log("Mebleg duzgun deyil");
        }
    }

    
    cashOut(amount) {
        if (amount <= this.balance) {
            this.balance -= amount; 
        } else {
            console.log("balans duzgun deyil.");
        }
    }
}


const Accounts = new BankAccount(100); 

console.log(Accounts.getBalanceInfo()); 

Accounts.cashIn(50); 
console.log(Accounts.getBalanceInfo()); 

Accounts.cashOut(30); 
console.log(Accounts.getBalanceInfo()); 
