//Object is collection of properties

let person = {
  firstName: "Tim",
  lastName: "Joe",
  age: 24,
  fullName: function () {
    console.log(this.firstName + this.lastName);
  },
};
console.log(person.fullName());
console.log("Last Name: " + person.lastName); //Joe
console.log("Last Name: " + person["lastName"]); //Joe

person.firstName = "Tim Dane";
console.log("First Name: " + person.firstName);
//Adding new property
person.gender = "male";
console.log(person);
//delete the gender
delete person.gender;
console.log(person);

//to check it is present or not
console.log("gender" in person); //false
console.log("firstName" in person); //true

console.log("");
console.log("*********************Iterative*************************");
for (let key in person) {
  console.log(person[key]);
}
