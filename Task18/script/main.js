document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const age = parseInt(document.getElementById('age').value.trim());
    const designation = document.getElementById('designation').value.trim();
    const dob = document.getElementById('dob').value;
    const files = document.getElementById('files').files;

    let errors = [];

    if (name === '' || !/^[a-zA-Z\s]+$/.test(name)) {
        errors.push('Please enter a valid name.');
    }

    if (email === '' || !/^\S+@\S+\.\S+$/.test(email)) {
        errors.push('Please enter a valid email address.');
    }

    if (contact === '' || !/^[0-9]{10}$/.test(contact)) {
        errors.push('Please enter a valid 10-digit contact number.');
    }

    if (isNaN(age) || age < 18 || age > 100) {
        errors.push('Please enter a valid age between 18 and 100.');
    }

    if (designation === '') {
        errors.push('Please enter your designation.');
    }

    if (dob === '') {
        errors.push('Please select your date of birth.');
    }

    if (files.length === 0) {
        errors.push('Please select at least one file.');
    }

    if (errors.length > 0) {
        document.getElementById('result').innerHTML = errors.join('<br>');
    } else {
        document.getElementById('result').innerHTML = 'Form submitted successfully!';
    }
});
