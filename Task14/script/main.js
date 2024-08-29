// 1. Create a parameterized function to multiply 3 numbers
function multiplyThreeNumbers(a, b, c) {
    return a * b * c;
}

console.log('Multiplication of 2, 3, 4:', multiplyThreeNumbers(2, 3, 4)); // Output: 24

// 2. Create a parameterized function to divide 2 numbers
function divideTwoNumbers(a, b) {
    if (b === 0) {
        return 'Division by zero is not allowed';
    }
    return a / b;
}

console.log('Division of 10 by 2:', divideTwoNumbers(10, 2)); // Output: 5

// 3. Create a function to add background color to a div element
function setBackgroundColorToDiv(color) {
    const div = document.getElementById('color-div');
    div.style.backgroundColor = color;
}

// Add event listener to change the background color when the div is clicked
document.getElementById('color-div').addEventListener('click', function () {
    setBackgroundColorToDiv('lightblue');
});

// 4. Write a function to generate random background color of the body
function generateRandomBackgroundColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
}

// Generate a random background color on page load
window.onload = function () {
    generateRandomBackgroundColor();

    // 5. Display modal on page load
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
};
