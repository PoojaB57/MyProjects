// Task 1: Get the first element in an array that has a value greater than 20
const array1 = [15, 23, 8, 42, 12];
const firstGreaterThan20 = array1.find(element => element > 20);
console.log('First element greater than 20:', firstGreaterThan20);

// Task 2: Get the first element in an array that has a value less than 20
const firstLessThan20 = array1.find(element => element < 20);
console.log('First element less than 20:', firstLessThan20);

// Task 3: Filter data based on an id (property) in an array of objects
const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jack' }
];
const idToFilter = 2;
const filteredData = data.filter(item => item.id === idToFilter);
console.log('Filtered data based on id:', filteredData);

// Task 4: Check if elements in an array are odd or even
const array2 = [90, 89, 56, 45];
const oddOrEven = array2.map(number => number % 2 === 0 ? 'Even' : 'Odd');
console.log('Odd or Even:', oddOrEven);

// Task 5: Create a class Book
class Book {
    constructor(type, pages, pageType, author) {
        this.type = type;
        this.pages = pages;
        this.pageType = pageType;
        this.author = author;
    }

    typeOfBook() {
        return `This is a ${this.type} book.`;
    }

    numberOfPages() {
        return `It has ${this.pages} pages.`;
    }

    typeOfPages() {
        return `The pages are ${this.pageType}.`;
    }

    authorInfo() {
        return `The author of this book is ${this.author}.`;
    }
}

const myBook = new Book('Fiction', 300, 'Glossy', 'J.K. Rowling');
console.log(myBook.typeOfBook());
console.log(myBook.numberOfPages());
console.log(myBook.typeOfPages());
console.log(myBook.authorInfo());

// Task 6: Create a class Animal
class Animal {
    constructor(name, gender, disease) {
        this.name = name;
        this.gender = gender;
        this.disease = disease;
    }

    walk() {
        return `${this.name} is walking.`;
    }

    eat() {
        return `${this.name} is eating.`;
    }

    climb() {
        return `${this.name} is climbing.`;
    }

    genderInfo() {
        return `This animal is ${this.gender}.`;
    }

    diseaseInfo() {
        return `${this.name} has ${this.disease}.`;
    }
}

const myAnimal = new Animal('Tiger', 'Male', 'None');
console.log(myAnimal.walk());
console.log(myAnimal.eat());
console.log(myAnimal.climb());
console.log(myAnimal.genderInfo());
console.log(myAnimal.diseaseInfo());
