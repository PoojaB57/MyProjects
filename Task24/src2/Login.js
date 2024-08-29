import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        let formIsValid = true;

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

        setErrors(errors);
        return formIsValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setMessage(`Email: ${email}, Password: ${password}`);
        }
    }

    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div style={{ color: 'red' }}>{errors.email}</div>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div style={{ color: 'red' }}>{errors.password}</div>
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <div>{message}</div>}
        </div>
    );
}

export default Login;