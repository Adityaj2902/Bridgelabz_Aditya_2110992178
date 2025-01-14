// We use encapsulation in OOP to protect an object's internal state by 
// restricting direct access to its fields and providing controlled access 
// through methods (getters and setters). This ensures data integrity, 
// improves security, and helps maintain a clear separation between an object's 
// internal implementation and its external interface.
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = 0;
        if (initialBalance > 0) {
            this.balance = initialBalance;
        }
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient funds!");
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // Output: 1300
