//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine {
  constructor (propertyOne, propertyTwo, propertyThree, propertyFour) {
    this.propertyOne= propertyOne
    this.propertyTwo = propertyTwo
    this.propertyThree = propertyThree
    this.propertyFour = propertyFour
  }
  honk() {
    alert("beed beep fucker")
  }
  lock() {
    alert("We are locked")
  }
}


let newCup = new EspressoMachine("sere", "cheza", "mboke", "fuyooo")
console.log(newCup.propertyOne);
