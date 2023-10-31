// Type Conversion
// Equality in JS
// "1" = "1"
// One Equal to
let value = 1;
let value2 = "1"; // 1
//Two Equal to - Loose equality/coersion
// console.log(value == value2);
// Three Equal to signs - Strict Equality
// console.log(value === value2);

// Arrays
let arry1;
arry1 = [1, 2.3, null, undefined, true, 203498237247523n, "This is something"];

console.log(arry1);
// Checking an array's length
console.log(arry1.length); // 7
// Adding items to an array
// Push Method - Adds an item from the last postion of the array
let anotherValue = 5;
arry1.push(anotherValue);
console.log(arry1);
// unshift - Add one or more elements to an array at it's beginning
arry1.unshift([1, 2, 3, 5], 30);
console.log(arry1);

// Removing items from an array
// pop - Removes an item from the last postion of the array
arry1.pop();
console.log(arry1);
// shift - Removes an element from the first position of the array
arry1.shift();
console.log(arry1);
