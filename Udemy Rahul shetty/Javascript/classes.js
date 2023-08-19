module.exports = class Person {
  age = 25;

  get location() {
    return "canada";
  }

  //Constructor is method which executes by default when you create object of the class
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //Methods
  fullName() {
    console.log(this.firstName + this.lastName);
  }
};

// let person = new Person("Tim", "Joseph");
// let person1 = new Person("chris", "Jones");

// console.log(person.age);
// console.log(person.location);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName());
// console.log(person1.fullName());
