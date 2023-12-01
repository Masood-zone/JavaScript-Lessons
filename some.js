// const tasks = [
//   "Go Home",
//   "Turn TV on",
//   "Plan on keeping things safe",
//   "Start some concepts",
// ];

// const lists = tasks.map((task) => console.log(task));

// Creating Arrays
// The spread operator: involves using three dots
// let a = [1, 2, 3];
// let b = [0, ...a, 4];
// let digits = [..."1234559284820"];
// // To remove duplicates from an array, you can use the set object with the spread operator
// let letters = [..."hello world"];
// // Using the array constructor
// let newArry = new Array(25); //use one numeric argument to define it's length
// let newArry2 = new Array(201, 20, "Kirito"); //use two or more to define it's elements
// console.log(newArry);

// Your Unix timestamp
// var unixTimestamp = 1700200830;

// // Convert to JavaScript timestamp and create a new Date object
// var dateObj = new Date(unixTimestamp * 1000);

// // Convert to localized date and time string
// var formattedDate = dateObj.toLocaleString();

// console.log(formattedDate);

// freeCodeCamp - JS reduce() method
/*
These are what you can do with reduce() method

1. Summarizing your values into a single value
2. Grouping similar items together
3. Removing duplicates from an array

*/

// 1. Summarizing your values into a single value

// const items = [
//   { name: "Apple", price: 1 },
//   { name: "Orange", price: 2 },
//   { name: "Mango", price: 3 },
// ];

// Calculating the total price using forEach() method
// let totalPrice = 0;
// items.forEach((item) => (totalPrice += item.price));

// console.log(totalPrice); //6

// Using reduce()
// const totalPrice = items.reduce((acc, item) => {
//   return (acc += item.price);
// }, 0);
// console.log(totalPrice);

// 2. Grouping similar items together (grouping category)
const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Onion", category: "Vegetable" },
  { name: "Orange", category: "Fruit" },
  { name: "Lettuce", category: "Vegetable" },
];

const groupedItems = items.reduce((acc, item) => {
  const category = item.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(item.name);
  return acc;
}, {});

console.log(groupedItems);

// 3. Removing duplicates from an array
const duplicates = [1, 2, 3, 1, 2, 3, 8, 7];

const nonDuplicates = duplicates.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);

console.log(nonDuplicates);
