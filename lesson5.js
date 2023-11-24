// flat() method - flattens an array into a single array
let techProducts = [
  "iPhones", // 350
  "Samsung", // 400
  "lenovo", // 390
  ["airpods", ["series Watches"]],
  ["Earbuds", "Galaxy Watches", ["Samsung Tab 9 Ultra", "Tab 10 Max"]],
];

let newProducts = techProducts.flat(2);
// console.log(newProducts);

// flatMap() -
// let newProducts2 = techProducts.flatMap((value) => console.log(value));

// includes() method - check whether the condition you have provided, the elements in the array will match it
// console.log(newProducts.includes());

// sort() method - sorts the elements of an array alphabetically
let sortedProducts = newProducts.sort(function (firstWord, secondWord) {
  let a = firstWord.toLowerCase();
  let b = secondWord.toLowerCase();
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});

console.log(sortedProducts);
