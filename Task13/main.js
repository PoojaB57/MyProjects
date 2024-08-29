// 1. Create an object for animal and car
const animal = {
    type: 'Dog',
    breed: 'Labrador',
    age: 5,
    makeSound: function () {
        return 'Woof!';
    }
};

const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    startEngine: function () {
        return 'Engine started';
    }
};

console.log('Animal:', animal);
console.log('Car:', car);

// 2. Find duplicates in a string (optional)
function findDuplicates(str) {
    const arr = str.split('');
    const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index && arr.lastIndexOf(item) === index);
    return [...new Set(duplicates)];
}

console.log('Duplicates in "hello":', findDuplicates('hello'));

// 3. Reverse a string (using array method)
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log('Reversed "hello":', reverseString('hello'));

// 4. Find highest and lowest value in an array
const numbers = [12, 5, 8, 130, 44, 89];
const highest = Math.max(...numbers);
const lowest = Math.min(...numbers);

console.log('Highest value:', highest);
console.log('Lowest value:', lowest);

// 5. Sorting of an array (optional)
const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log('Sorted array:', sortedNumbers);

// 6. Display first 3 elements in an array in UI
const arrayToDisplay = [12, 5, 8, 130, 44, 89];
const listElement = document.getElementById('array-display');

arrayToDisplay.slice(0, 3).forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listElement.appendChild(listItem);
});

// 7. Remove 4th element and add 2 elements at that position
const modifiedArray = [...arrayToDisplay];
modifiedArray.splice(3, 1, 99, 100); // Remove 4th element and add 99 and 100

console.log('Modified array:', modifiedArray);
