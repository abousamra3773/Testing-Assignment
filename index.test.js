const { sumOfArray, isPalindrome, findMax, capitalizeWords } = require("./index");

// TESTS

// 1. sumOfArray() TESTS

// Adds Numbers Correctly
test("sumOfArray adds numbers correctly", () => {
    expect(sumOfArray([1, 2, 3])).toBe(6);
});

// An empty array should be a 0;
test("sumOfArray returns a 0 for an empty array", () => {
    expect(sumOfArray([])).toBe(0);
});

// Can have a single element
test("sumOfArray returns a single number ", () => {
    expect(sumOfArray([5])).toBe(5);
});

// Can add all negative numbers
test("sumOfArray can add negative numbers ", () => {
    expect(sumOfArray([-1,-2,-3])).toBe(-6);
});

// Can add all decimal numbers
test("sumOfArray can add decimal numbers", () => {
    expect(sumOfArray([1.5,2.5,3.0])).toBe(7);
});

// THROWS

// Checks if input is NOT an array
test("Error - sumOfArray throws if input is not array", () => {
    expect(() => sumOfArray("test")).toThrow(TypeError);
});

// Error - checks if it is not a number 
test("Error - sumOfArray throws if array contains non-number", () => {
    expect(() => sumOfArray([1, "2", 3])).toThrow(TypeError);
});

// is undefined
test("Error - sumOfArray is undefined", () => {
    expect(() => sumOfArray(undefined)).toThrow(TypeError);
});

// is null
test("Error - sumOfArray is undefined", () => {
    expect(() => sumOfArray(null)).toThrow(TypeError);
});



/////////////////////////////////////////////////////////////////////////



// 2. isPalindrome(str) TESTS

//.toBe
// the word is a palidrome check
test("isPalidrome returns true for racecar", () => {
    expect(isPalindrome("racecar")).toBe(true);
});

// to be truthy to check if word is palidrome 
test("isPalidrome returns true for racecar", () => {
    expect(isPalindrome("racecar")).toBeTruthy();
});

// the word is not a palidrome check
test("isPalidrome is case insensitive", () => {
    expect(isPalindrome("Anna")).toBe(true);
});

// A Single character is always a palindrome
test("isPalidrome returns true for a single character", () => {
    expect(isPalindrome("a")).toBe(true);
});

// check for an empty string
test("isPalidrome returns true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
});

// throws if a whole/positive number is passed
test("isPalidrome throws if the input has a number", () => {
    expect(() => isPalindrome(1)).toThrow(TypeError);
});

// throws if a negative number is passed 
test("isPalidrome throws if the input has a negative number", () => {
    expect(() => isPalindrome(-1)).toThrow(TypeError);
});

// throws if an array is passed - because my function expects a single string
test("isPalidrome throws if the input is an array", () => {
    expect(() => isPalindrome(["racecar"])).toThrow(TypeError);
});

// throws if null is passed
test("isPalidrome throws if the input is an array", () => {
    expect(() => isPalindrome(null)).toThrow(TypeError);
});

//throws if null is passed
test("isPalidrome throws if the input is undefined", () => {
    expect(() => isPalindrome(undefined)).toThrow(TypeError);
});

/////////////////////////////////////////////////////////////////////////////////////////

// 3. findMax(arr) TESTS

// Adds Numbers Correctly
// checks if the highest number is returned
test("The highest number is returned", () => {
    expect(findMax([800000, 750000, 805000, 820000])).toBe(820000);
});

// works with small numbers
test("Works with small numbers", () => {
    expect(findMax([1, 2, 3 ])).toBe(3);
});

// works with negative numbers
test("Works with negative numbers", () => {
    expect(findMax([-1, -8, -9 ])).toBe(-1);
});

// works with a single number
test("Works with negative numbers", () => {
    expect(findMax([5])).toBe(5);
});

// throws if not an array
test("Throws if findMax is not an array", () => {
    expect(() => findMax("testing")).toThrow(TypeError);
});

// throws if input is not an array
test("findMax throws if input is not an array", () => {
    expect(() => findMax("test")).toThrow(TypeError);
});

// throws if array is empty
test("findMax throws if array is empty", () => {
    expect(() => findMax([])).toThrow(Error);
});

// throws if input is a number
test("findMax throws if input is a number", () => {
    expect(() => findMax(123)).toThrow(TypeError);
});

// throws if input is undefined
test("findMax throws if input is undefined", () => {
    expect(() => findMax(undefined)).toThrow(TypeError);
});

// the result is greater than the second highest number
test("result is greater than the other values", () => {
    expect(findMax([1,2,3])).toBeGreaterThan(2);
});

// the result is greater than or equal to the max value
test("result is greater than the other values", () => {
    expect(findMax([1,2,3])).toBeGreaterThanOrEqual(3);
});


//////////////////////////////////////////////////////////////////////
// 4. capitalizeWords TESTS

// capitalizes the first letter of each word
test("capitalizes the first letter of each word", () => {
    expect(capitalizeWords("tanya jones")).toBe("Tanya Jones");
});

// capitalizes a single word
test("capitalizes a single word", () => {
    expect(capitalizeWords("tanya")).toBe("Tanya");
});

// checks if it is already capitalized
test("The word/s is/are already capitalized", () => {
    expect(capitalizeWords("Tanya Jones")).toBe("Tanya Jones");
});

// all uppercase
test("Check if already all capitalized", () => {
    expect(capitalizeWords("TANYA JONES")).toBe("TANYA JONES");
});

// empty string
test("Returns an empty string for an empty input", () => {
    expect(capitalizeWords("")).toBe("");
});

// throws if input is a number
test("capitalizeWords throws if input is a number", () => {
    expect(() => capitalizeWords(123)).toThrow(TypeError);
});

// throws if input is undefined
test("capitalizeWords throws if input is undefined", () => {
    expect(() => capitalizeWords(undefined)).toThrow(TypeError);
});

// throws if input is an array
test("capitalizeWords throws if input is an array", () => {
    expect(() => capitalizeWords(["tanya"])).toThrow(TypeError);
});

// throws if input is null
test("capitalizeWords throws if input is null", () => {
    expect(() => capitalizeWords(null)).toThrow(TypeError);
});














