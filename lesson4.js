// Advanced Array methods
// Iterator methods
// forEach(), map(), find(), filter(), reduce()

// forEach() method - forEach does not mutate the array
let arry1 = [1, 2, 3, 4, 5, 6];
// arry1.forEach((element) => console.log(element - 2));

// map() method - this one also does not mutate the array
let arry2 = [1, 2, 3];
const multiplyByTwo = arry2.map((value) => value * 2);
// console.log(multiplyByTwo);

//find() method - returns only one value based on a condition specified
let arry3 = [1, 2, 3, 4, 6, 8, 9, 10];
const findFirstEvenNumber = arry3.find((evenNumb) => evenNumb % 2 === 0);
// console.log(findFirstEvenNumber);

// filter() method - returns one or more values that meets the condition specified
let arry4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterNumberRange = arry4.filter((value) => value < 6);
// console.log(filterNumberRange);

// reduce() method
let arry5 = [1, 2, 3, 4, 5, 6, 7];
// const reduceAllValues = arry5.reduce((value) => value + 2, 1);

// console.log(reduceAllValues);
