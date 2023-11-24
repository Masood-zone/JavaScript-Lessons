// Array searching and sorting methods
// indexOf() and lastIndexOf() method - To know the position of an element inside an array, from the beginning or end of an array
let girlNames = ["Faiza", "Sahada", "adepha", "MTC", "Adepha", "Sahada"];

// console.log(girlNames.indexOf("Adepha"));
// console.log(girlNames.lastIndexOf("Adepha"));

// includes() method
let checkGirlName = "adepha";
// console.log(girlNames.includes(checkGirlName));

//sort() method
console.log(
  girlNames.sort((firstLetter, secondLetter) => {
    let a = firstLetter.toLowerCase();
    let b = secondLetter.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  })
);

// let a = [33, 4, 1111, 222];
// console.log(a.sort());
// 33 - 4 = 29

// console.log(
//   a.sort((a, b) => {
//     return a - b;
//   })
// );
