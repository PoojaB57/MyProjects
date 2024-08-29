import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            dob: '',
            contact: '',
            email: '',
            password: '',
            message: '',
            errors: {}
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    validateForm = () => {
        const { name, age, dob, contact, email, password } = this.state;
        const errors = {};
        let formIsValid = true;

        if (!name) {
            formIsValid = false;
            errors['name'] = 'Please enter your name.';
        }

        if (!age) {
            formIsValid = false;
            errors['age'] = 'Please enter your age.';
        } else if (isNaN(age)) {
            formIsValid = false;
            errors['age'] = 'Please enter a valid number for age.';
        }

        if (!dob) {
            formIsValid = false;
            errors['dob'] = 'Please enter your date of birth.';
        }

        if (!contact) {
            formIsValid = false;
            errors['contact'] = 'Please enter your contact number.';
        } else if (!/^\d{10}$/.test(contact)) {
            formIsValid = false;
            errors['contact'] = 'Please enter a valid 10-digit contact number.';
        }

        if (!email) {
            formIsValid = false;
            errors['email'] = 'Please enter your email address.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formIsValid = false;
            errors['email'] = 'Please enter a valid email address.';
        }

        if (!password) {
            formIsValid = false;
            errors['password'] = 'Please enter your password.';
        } else if (password.length < 6) {
            formIsValid = false;
            errors['password'] = 'Password must be at least 6 characters long.';
        }

        this.setState({ errors });
        return formIsValid;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            this.setState({ message: 'Form is submitted successfully!' });
        }
    }

    render() {
        const { name, age, dob, contact, email, password, message, errors } = this.state;

        return (
            <div>
                <h2>Signup Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={name} onChange={this.handleChange} />
                        <div style={{ color: 'red' }}>{errors.name}</div>
                    </div>
                    <div>
                        <label>Age:</label>
                        <input type="text" name="age" value={age} onChange={this.handleChange} />
                        <div style={{ color: 'red' }}>{errors.age}</div>
                    </div>
                    <div>
                        <label>Date of Birth:</label>
                        <input type="date" name="dob" value={dob} onChange={this.handleChange} />
                        <div style={{ color: 'red' }}>{errors.dob}</div>
                    </div>
                    <div>
                        <label>Contact:</label>
                        <input type="text" name="contact" value={contact} onChange={this.handleChange} />
                        <div style={{ color: 'red' }}>{errors.contact}</div>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={email} onChange={this.handleChange} />
                        <div style={{ color: 'red' }}>{errors.email}</div>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" value={password} onChange={this.handleChange} />
                        <div style={{ color: 'red' }}>{errors.password}</div>
                    </div>
                    <button type="submit">Signup</button>
                </form>
                {message && <div>{message}</div>}
            </div>
        );
    }
}

export default Signup;