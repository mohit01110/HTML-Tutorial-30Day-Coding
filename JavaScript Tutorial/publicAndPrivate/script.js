class BankAccount {
  #balance = 0

  deposit(amount) {
    this.#balance += amount
    console.log(`Current Balance is ${amount}, new Balance is ${this.#balance}`)
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('Insufficient Balance')
    } else {
      this.#balance -= amount
      console.log(`Withdraw ${amount}, new balance is ${this.#balance}`)
    }
  }

  balance(){
    console.log(this.#balance);
    
  }
}

const account = new BankAccount()
account.deposit(100)
account.withdraw(50)
account.balance()

