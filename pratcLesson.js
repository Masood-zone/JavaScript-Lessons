// Flatening arrays with flat() and flatMap()
// The flat() method flatens an array of arrays by only one level
const techArray = [
  "iPhone",
  "Samsung",
  [["Earbuds", "Earbuds Pro"], "Galaxy watch"], // Two levels of an array inside an array
  ["Airpods", ["Series"]],
];
// console.log(techArray.flat());

// Now let's flatten them according to the levels we want to flatten by.
const newTechArray = [
  "Dell Alienware",
  "Lenovo Ideapad 3i",
  ["HP Victus", ["HP Pavillion 16.5"]],
  ["HP Victus 15", "HP Victus 17"],
  ["HP Victus 15", "HP Victus 17"],
];
// console.log(newTechArray.flat(2));
/* Note, so depending on the number of arrays in an array, when you flatten it by specifying a number, that means it'll check the arrays with it's number and then flattens it to be a part of the main array.
Meaning if I want to flatten newTechArray[] by 2 then it means the arrays that are nested in the main array two times will be flattened.
Hence: [
  'Dell Alienware',
  'Lenovo Ideapad 3i',
  'HP Victus',
  'HP Pavillion 16.5',
  [ 'HP Victus 15', 'HP Victus 17' ]
]
*/

// flatMap()
const phrases = ["hello world", "the definitive guide"];
// let words = phrases.flatMap((phrase) => phrase.split(" "));
// console.log(newTechArray.flatMap((laptop) => console.log(laptop)));

// splice(), slice(), fill(), copyWithin()
// console.log(techArray.slice(1, 3).flat(2));
console.log(newTechArray.splice(2, 2)); //For the splice, the first argument is the position for deleting an/the element/s, now when you provide a second arugment, it specifies the number of elements to be deleted
console.log(newTechArray); // And it mutates the array also

let girlNames = ["Faiza", "Sahada", "Adepha", "MTC"];
// How array methods really work?
//Faiza is my name
//Sahada is my name
//Adepha is my name
//MTC is my name
// Manually implemting a looped array
// console.log(girlNames[0] + " is my name.");
// console.log(girlNames[1] + " is my name.");
// console.log(girlNames[2] + " is my name.");
// console.log(girlNames[3] + " is my name.");
//Now using an array method
// girlNames.map((name) => console.log(name + " is my name."));
