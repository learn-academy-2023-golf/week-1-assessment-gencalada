// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: The string "indigo" will be added to the end of the array and display the new colors array.
// b) Verify and explain: Although the command does add indigo to the end of the array, our output is the new length of the array. which is 5.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: our output will be 10. this is because of the index number assigned to each character within the string. this includes spaces.
// b) Verify and explain: 10 was indeed the output! spaces take up an index value

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: The character taking up the 4th index value "o" will be displayed as the output.
// b) Verify and explain: the letter o was indeed the output given. this is because the first character always has an index value of 0.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: because index is given the value of 1, the output will be the set of characters "Ruby" taking up the 1st index value
// b) Verify and explain: ruby was indeed the output!

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: Both saturday and sunday will be capitalized.
// b) Verify and explain: my prediction was incorrect. We received a type error message displaying "weekDays.toUpperCase is not a function". This is because .toUpperCase only applies to string datatypes.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: the output will be a syntax error message. there are two different things trying to influence the array.
// b) Verify and explain: My prediction was incorrect. this is because .length also has a property where it can take up the value of zero. so in this case 0 was pointing to whatever was taking the zero index
