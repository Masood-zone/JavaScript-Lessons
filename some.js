const tasks = [
  "Go Home",
  "Turn TV on",
  "Plan on keeping things safe",
  "Start some concepts",
];

const lists = tasks.map((task) => console.log(task));

// Creating Arrays
// The spread operator: involves using three dots
let a = [1, 2, 3];
let b = [0, ...a, 4];
let digits = [..."1234559284820"];
// To remove duplicates from an array, you can use the set object with the spread operator
let letters = [..."hello world"];
// Using the array constructor
let newArry = new Array(25); //use one numeric argument to define it's length
let newArry2 = new Array(201, 20, "Kirito"); //use two or more to define it's elements
console.log(newArry);
