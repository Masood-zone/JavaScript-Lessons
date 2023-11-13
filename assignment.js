// TODO - Create an array with 5 elements
// <--- Array goes here --->
let bestAnime = [
  "Naruto Shippuden",
  "Jujustu Kaisen",
  "Vinland Saga",
  "Soul Land",
  "Attack on Titan",
];
//Completed
/*
    You have to declare your variable names before using the array literal (that is: [these brackets]);
*/

// TODO - console.log(--yourArrayName--) your array to display it
// console.log(bestAnime);
/*
    Console.log() helps you to run your program at the terminal(console) level.
*/

// TODO - I want you to push a new element into it.
// Add any element you want
let newElement = 9.7;
bestAnime.push(newElement);
// TODO - Remove a single item from the last position of the array
// Use the pop() method
bestAnime.pop();
// TODO - Add an item to your array's beginning
let best_Of_All_Time = "One Piece";
bestAnime.unshift(best_Of_All_Time);
// console.log(bestAnime);
// TODO - Remove an item from your array's beginnig
bestAnime.shift();
// console.log(bestAnime);

// TODO - Create two arrays and concat them
let array1 = [10, 90, 100, 15, 25];
let array2 = [45, 293, 2044];
let result = array1.concat(array2);
console.log(result);

// Humble Lion's code
let chippy = ["humble", "masood", "sammy", "chip"];
let frontend = ["humble", "masood", "godbless"];
let humbleCode = chippy.concat(frontend);
console.log(chippy);
// frontend.concat

// TODO - Slice an array to get the first 3 elements
// slice() method
let otherNames = chippy.slice(0, 3);
console.log(otherNames);

// TODO - Add two elements to the array and then slice the first four elements from it.
