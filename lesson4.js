// Advanced Array methods
// Iterator methods
// forEach(), map(), find(), filter(), reduce()

// forEach() method - forEach does not mutate the array and does not create a new array to be worked on
let arry1 = [1, 2, 3, 4, 5, 6];
// arry1.forEach((element) => console.log(element - 2));

// map() method - this one also does not mutate the array but creates a new array to be worked on
let arry2 = [1, 2, 3];
const multiplyByTwo = arry2.map((value) => value * 2);
// console.log(multiplyByTwo);

//find() method - returns only one value based on a condition specified
let arry3 = [1, 2, 3, 4, 6, 8, 9, 10];
const findFirstEvenNumber = arry3.find((evenNumb) => evenNumb % 2 === 0);
// console.log(findFirstEvenNumber);

// filter() method - returns one or more values that meets the condition specified
// Example 1 - filtering through an array
let arry4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterNumberRange = arry4.filter((value) => value < 6);
// console.log(filterNumberRange);

// Example 2 - To filter an array of undefined/null elements
// index(i) [0, 1, 2, 3, 4]
let otherArray = [5, 4, 3, 2, 1, undefined, , , ,]; // lenght before filtering = 9
// console.log(
//   otherArray.filter((x, i) => i % 2 === 0),
//   otherArray.length
// );
// After filtering, length = 5
// console.log(
//   otherArray.filter((value) => value !== undefined && value !== null).length
// );

// reduce() method
let arry5 = [1, 2, 3, 4];
// const reduceAllValues = arry5.reduce((value) => value + 2, 1);
// console.log(reduceAllValues);
// let sum = arry5.reduce((acc, crntValue) => {
//   return acc + crntValue;
// }, 0);
// console.log(sum);

// reduce() method
let arry6 = [1, 2, 3, 4];
// using reduce method on this, you have to specify these
//reduce(arrowfunction,initialValue)
// In the arrowFuntion(acc, currentValue);
/*
    currentValue = 1
    initialValue = 0
    0+1 = 1
    Now, acc = 1;
    currentValue = 2;
    2+1 = 3
    Now, acc = 3;
    currentvalue = 3;
    3+3 = 6
    Now, acc = 6;
    currentValue = 4;
    6+4 = 10
 */
//
//
let sum = arry6.reduce((acc, currentValue) => {
  return acc + currentValue; //returns 10
}, 0);
console.log(sum);
