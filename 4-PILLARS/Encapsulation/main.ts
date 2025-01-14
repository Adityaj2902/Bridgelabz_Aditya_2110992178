
// We use encapsulation in OOP to protect an object's internal state by 
// restricting direct access to its fields and providing controlled access 
// through methods (getters and setters). This ensures data integrity, 
// improves security, and helps maintain a clear separation between an object's 
// internal implementation and its external interface.




class BankAccount {
    private balance: number = 0;

    constructor(initialBalance: number) {
        if (initialBalance > 0) {
            this.balance = initialBalance;
        }
    }

    deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    withdraw(amount: number) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds!");
        }
    }

    getBalance() {
        return this.balance;
    }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // Output: 1300
