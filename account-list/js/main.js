class Account {
  constructor (name){
    this.name = name
    this.balance = 0
  }
  credit(acc){
    this.balance += acc;
  }
  describe(){
    return `owner: ${this.name}, balance: ${this.balance}`;
  }
}

const Account1 = new Account("Sean");
const Account2 = new Account("Jose");
const Account3 = new Account("Miseda");

Account1.credit(0);
Account2.credit(0);
Account3.credit(5000);

console.log(`Account name is ${Account1.name} and balance: ${Account1.balance}`);
console.log(`Account name is ${Account2.name} and balance: ${Account2.balance}`);
console.log(`Account name is ${Account3.name} and balance: ${Account3.balance}`);



