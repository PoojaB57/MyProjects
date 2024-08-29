// Data Types and String Manipulation

// 1. Extract first five letters from a string
const str1 = ' gfuh ieiuei ';
const firstFive = str1.trim().slice(0, 5);
console.log('First five letters:', firstFive); // Output: 'gfuh '

// 2. Get the length of a string and make it uppercase
const str2 = 'hduej dij';
const lengthUppercase = str2.length.toString().toUpperCase();
console.log('Length of the string in uppercase:', lengthUppercase); // Output: '11'

// 3. Take a string, make it lowercase and trim it
const str3 = ' biji jdo ';
const lowerTrimmed = str3.toLowerCase().trim();
console.log('Lowercase and trimmed string:', lowerTrimmed); // Output: 'biji jdo'

// 4. Replace specified word in a string
const str4 = 'Hello world!';
const replacedString = str4.replace('world', 'everyone');
console.log('String with replaced word:', replacedString); // Output: 'Hello everyone!'

// 5. Random statements in implicit coercion
const implicitCoercion = 89 + 'hello' + (90 / 9);
console.log('Implicit coercion result:', implicitCoercion); // Output: '89hello10'
