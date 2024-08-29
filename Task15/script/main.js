// 1. Check if a given number is a multiple of 3
function isMultipleOfThree(number) {
    return number % 3 === 0 ? `${number} is a multiple of 3` : `${number} is not a multiple of 3`;
}

console.log(isMultipleOfThree(10900)); // Output: "10900 is not a multiple of 3"

// 2. Check if a particular sub-word exists in a string
function checkSubstringExistence(mainString, subString) {
    return mainString.includes(subString) ? `"${subString}" exists in the string` : `"${subString}" does not exist in the string`;
}

console.log(checkSubstringExistence('I am learning JS', 'JS')); // Output: '"JS" exists in the string'

// 3. Calculate complex interest
function calculateComplexInterest(principle, rate, time) {
    return ((principle * rate * time) / 100).toFixed(2);
}

// Simulate user input
const userPrinciple = 1000;
const userRate = 5;
const userTime = 2;

const complexInterest = calculateComplexInterest(userPrinciple, userRate, userTime);
console.log(`Complex interest is: ${complexInterest}`); // Output: "Complex interest is: 100.00"
