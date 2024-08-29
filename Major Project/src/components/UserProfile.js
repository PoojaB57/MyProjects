import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../features/user/userSlice';

const UserProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const loading = useSelector(state => state.user.loading);

    const handleLogin = async () => {
        dispatch(loginStart());
        try {
            // Assume login API call here
            const userData = { name: 'John Doe' }; // Example data
            dispatch(loginSuccess(userData));
        } catch (error) {
            dispatch(loginFailure(error.toString()));
        }
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : user ? (
                <p>Welcome, {user.name}</p>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
        </div>
    );
};

export default UserProfile;