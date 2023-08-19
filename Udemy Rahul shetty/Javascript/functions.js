function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
console.log("");

//do not name => Anyonymus function== Function expressions
let sumOfIntegers = function (c, d) {
  return c + d;
};
console.log(sumOfIntegers(2, 3));

//Arrow function
let sumOfNumber = (c, d) => c + d;
console.log(sumOfNumber(2, 3));

console.log("");
console.log("***************var*****************");

//var - global level/functional
var greet = "Evening";
if (1 == 1) {
  var greet = "Afternoon";
}
function add(a, b) {
  var greet = "Morning";
  return a + b;
}
console.log(greet); //Afternoon
console.log(add(2, 3));

//let global level/block level{}
console.log("");
console.log("**************Let**************");
let greet1 = "Evening";

if (1 == 1) {
  let greet1 = "Afternoon";
}
function add(a, b) {
  let greet1 = "Morning";
  return a + b;
}
console.log(greet1); //Evening
console.log(add(2, 3));
