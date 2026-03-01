
// FUNCTIONS 

// 1. sumOfArray()

// function without the testing
// function sumOfArray(arr) {
//   return arr.reduce((total, num) => total + num, 0);
// }

//Could be used in an itemized Grocery List 
// ...that show totals prices based on grocery items in an array. 

// arr is the parameter so I can pass the arrays of numbers here
// Array.isArray(value) returns true or false if not an array
// So if the input is not '!' an array it throws a TypeError 
// ...and STOPS the function immediately
// If it is an array then .reduce() will loop through each element of the array.
// total is the accumulator or the running total. 
// And num is the current element in the array
// if (typeof num != "number" if the value is not a number type
// Or || if the value is NaN (Not A Number) then an error is thrown.
// otherwise both checks are true so it adds the running total plus the current number
// And 0 sets the initial value for the running total

function sumOfArray(arr) {
    if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
    }

    return arr.reduce((total, num) => {
    if (typeof num !== "number" || isNaN(num)) {
        throw new TypeError("All array values must be numbers");
    }
    return total + num;
    }, 0);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

// 2. isPalindrome(str)

//     "Anna", // true
//     "Bob", // true
//     "Janet", // false
//     "Steve", // false
//     "Elle",  //true
//     "Ava" //true
// "racecar" true

// function isPalindrome(str) {
//     const normalstr = str.toLowerCase();
//     return normalstr === str.toLowerCase().split("").reverse().join("");
//  }

function isPalindrome(str) {
    if (typeof str !== "string") {
        throw new TypeError("input must be a string");
    }
    // toLowerCase because a palidrome string could have both uppercase and lowercase letters 
    // Example Anna = annA
    const normalstr = str.toLowerCase();
    return normalstr === str.toLowerCase().split("").reverse().join("");
 }

// console.log(isPalindrome("Anna")); // true
// console.log(isPalindrome("Steve")); // false

///////////////////////////////////////////////////////////////////////////////////

// 3. findMax(arr)

// function findMax(arr){
//     const max = Math.max(...arr);
//     return max;
// }
// console.log(findMax(homePrices));

// Scenario - find the highest price of home sales 
// in a given neighborhood in the last three months

const homePrices = [800000, 750000, 805000, 820000];

function findMax(arr){
    if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
    }
    if (arr.length ===0) {
        throw new Error("Array cannot be empty.");
    }
    // using spread operator to grab everything in the array
    const max = Math.max(...arr);
    return max;
}
console.log(findMax(homePrices));


//////////////////////////////////////////////////////////////////////////


// 4. capitalizeWords(str)
// function capitalizeWords(str) {
//     return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
// }

// console.log(capitalizeWords("tanya jones"));

// Scenario could be used for checking that a person's name is capitalized 
// ...when submitting a form.

function capitalizeWords(str) {
    if (typeof str !== "string") {
        throw new TypeError("input must be a string");
    }
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalizeWords("tanya jones"));

module.exports = { sumOfArray, isPalindrome, findMax, capitalizeWords };