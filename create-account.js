function createAccount(pin, initialBalance = 0) {
    let balance = initialBalance;
  
    return {
      checkBalance: function (enteredPin) {
        if (enteredPin === pin) {
          return `$${balance}`;
        } else {
          return "Invalid PIN.";
        }
      },
      deposit: function (enteredPin, amount) {
        if (enteredPin === pin) {
          balance += amount;
          return `Succesfully deposited $${amount}. Current balance: $${balance}.`;
        } else {
          return "Invalid PIN.";
        }
      },
      withdraw: function (enteredPin, amount) {
        if (enteredPin === pin) {
          if (amount > balance) {
            return "Withdrawal amount exceeds account balance. Transaction cancelled.";
          }
          balance -= amount;
          return `Succesfully withdrew $${amount}. Current balance: $${balance}.`;
        } else {
          return "Invalid PIN.";
        }
      },
      changePin: function (oldPin, newPin) {
        if (oldPin === pin) {
          pin = newPin;
          return "PIN successfully changed!";
        } else {
          return "Invalid PIN.";
        }
      },
    };
  }
  
  

module.exports = { createAccount };
