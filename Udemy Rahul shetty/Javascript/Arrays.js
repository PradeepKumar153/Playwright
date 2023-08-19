var mark1 = Array(6);
var mark2 = new Array(20, 40, 35, 12, 37, 100);

var marks3 = [20, 40, 35, 12, 37, 100];
console.log(marks3[2]);
marks3[3] = 14;
console.log(marks3);
console.log("Lenght of the array: " + marks3.length);
//it will add the element to the array in last
marks3.push(64);
console.log("Push: " + marks3);
//it will delete last element in the array
marks3.pop();
console.log("Pop : " + marks3);
//it will add the element to the array in first
marks3.unshift(12);
console.log("unshift 12: " + marks3);
//it will find value of index
console.log("Indexof 100 : " + marks3.indexOf(100));
//120 in the array
console.log("120 is include in array : " + marks3.includes(120));

//slice
var submarks = marks3.slice(2, 5);
console.log(submarks);

//sum of the array
let sum = 0;
for (let i = 0; i < marks3.length; i++) {
  sum = sum + marks3[i];
}
console.log(sum);

//reduce filter map
//when there is iterative value you can use reduce
let total = marks3.reduce((sum, totalMarks) => sum + totalMarks, 0);
console.log(total);

//Example
console.log("************************************");
var scores = [12, 24, 5, 13, 14, 23, 16];
console.log(scores);
//create new array with even numbers of scores
var evenscores = [];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] % 2 == 0) {
    evenscores.push(scores[i]);
  }
}
console.log("even number of array: " + evenscores);

//filter method : when you want to filter even odd etc you can use
var filterscore = scores.filter((score) => score % 2 == 0);
console.log("Using filter: " + filterscore);

//map array
let mappedArray = filterscore.map((score) => score * 3);
console.log("Map Array multiple of 3 :" + mappedArray);
//sum
let totalval = mappedArray.reduce((sum, val) => sum + val, 0);
console.log("total sum :" + totalval);

console.log("");
console.log("Another Method");
let scores1 = [12, 24, 5, 13, 14, 23, 16];
let Totalscore = scores1
  .filter((score) => score % 2 == 0)
  .map((score) => score * 3)
  .reduce((sum, val) => sum + val, 0);

console.log("Total Score is : " + Totalscore);

console.log("");
console.log("Sorting of an array");
let fruits = ["Banana", "Orange", "mango", "apple"];
console.log("Before sorting : " + fruits);
console.log("Ascending Order :" + fruits.sort());
console.log("Descending Order :" + fruits.reverse());

console.log("");
//sorting number
let number = [12, 1, 4, 56, 42, 2];
console.log("Before Sort: " + number);
console.log("Ascending Order : " + number.sort((a, b) => a - b));
console.log("Descending Order :" + number.sort((a, b) => b - a));
