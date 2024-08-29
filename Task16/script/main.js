// 1. Display even numbers up to n number (ask user for number)
function displayEvenNumbers(n) {
    let evens = [];
    for (let i = 2; i <= n; i += 2) {
        evens.push(i);
    }
    return evens;
}

console.log('Even numbers up to 20:', displayEvenNumbers(20)); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// 2. Ask user for input, whether char is vowel or consonant
function checkVowelOrConsonant(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(char.toLowerCase())) {
        return `${char} is a vowel`;
    } else {
        return `${char} is a consonant`;
    }
}

console.log(checkVowelOrConsonant('A')); // Output: "A is a vowel"

// 3. Count of even and odd numbers from 1 to 999
function countEvenOdd() {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 1; i <= 999; i++) {
        if (i % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    return { evenCount, oddCount };
}

const counts = countEvenOdd();
console.log('Even count:', counts.evenCount); // Output: 499
console.log('Odd count:', counts.oddCount);   // Output: 500

// 4. Count occurrence of a particular character in a string (using loops)
function countCharacterOccurrence(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

console.log('Occurrence of "l" in "hello":', countCharacterOccurrence('hello', 'l')); // Output: 2

// 5. Sum and average of array elements [1, 9, 8]
function sumAndAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    return { sum, average };
}

const array = [1, 9, 8];
const result = sumAndAverage(array);
console.log('Sum:', result.sum);         // Output: 18
console.log('Average:', result.average); // Output: 6

// 6. Largest number in an array (using loops)
function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log('Largest number in [1, 9, 8]:', findLargestNumber([1, 9, 8])); // Output: 9
