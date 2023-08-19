//Inheritance is the main Pillar in Object oriented Programming
//One class can inherit/accquire the properties, Methods of another class
//The class which inherits the properties of other is known as subclass(derived class, child class)
//the class whose properties are inherited is known as superclass

const Person = require("./classes");

class Pet extends Person {
  //   get Location() {
  //     return "BlueCross";
  //   }
  constructor(firstName, lastName) {
    //call parent class constructor
    super(firstName, lastName);
  }
}
let pet = new Pet("sam", "san");
console.log(pet.fullName());
console.log(pet.location);
