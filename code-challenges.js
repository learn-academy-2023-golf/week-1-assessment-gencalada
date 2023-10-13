// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
////const fruit1 = "apple"
////const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit1 = "cherry"
const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:
// Input: 2 strings
// Output: the string that has more characters
// Use conditional statement to compare 2 strings
// .length to get the length of both strings
// Whichever .length is greater, retyrn that string

//if(fruit1, fruit2)
//if(fruit1 > fruit2)
//if(fruit1.length > fruit2.length)
// return fruit1 since it has more characters
// else, return fruit2
if(fruit1.length > fruit2.length){
    console.log(fruit1)
} else {
    console.log(fruit2)
}


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
//using concat, input the two arrays
//utilize .length in a way that will apply to the new array
console.log((padres1984WorldSeriesRuns.concat (padres1998WorldSeriesRuns)).length)

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

// Pseudo code:
//using console.log(typeof currentCohort) the output is that we are working with a string
//creating a new variable and using .split() we can convert the string to an array
//the .split("") creates an array using each index that made up the string
//creating an additional variable and reversing the new array
//finally, using the .join(), we can convert the newly made array back to a string.
//using the .join(""), we revert each index value back to a string, creating an output of 3202 NRAEL
var currentCohortArray = currentCohort.split("")
var currentCohortReversed = currentCohortArray.reverse()
console.log(currentCohortReversed.join(""))

// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:
//find the elements we want to work with within the array and their index numbers
//using console.log and the index numbers of each element we need, we can display only the odd numbers

console.log(stockExchange[0], stockExchange[4], stockExchange[5], stockExchange[7]) 