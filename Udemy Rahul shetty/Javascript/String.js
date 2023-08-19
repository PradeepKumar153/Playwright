const Person = require("./classes");

let day = "tuesday";
console.log(day.length); //8

let subDay = day.slice(0, 4);
console.log(subDay); //tues
console.log(day[1]); //u

let splitDay = day.split("s");
console.log(splitDay);
console.log(splitDay[1].length);
console.log(splitDay[1].trim().length);

console.log("");
let date = "23";
let nextDate = "27";
let diff = parseInt(nextDate) - parseInt(date);
console.log("difference between this two number : " + date + " " + nextDate);
console.log(diff);
console.log("Convert to string : " + diff.toString());

console.log("");
console.log("*********************************");
let newQuote = day + " is Funday";
console.log("Concate : " + newQuote);
//if you want first day give indexof("day")......if you want second then give indexof("day",5)
let val = newQuote.indexOf("day", 5);
console.log(val);

console.log("");
console.log("Example program");
let value = "Monday" + "Tuesday" + "Wednesday";
let count = 0;
let Res = value.indexOf("day");
while (Res !== -1) {
  count++;
  Res = value.indexOf("day", Res + 1);
}
console.log(count);

//calling another file object
console.log("");
console.log("************calling another file object*************");
let person = new Person("chirs", "Edward");
console.log(person.fullName());
