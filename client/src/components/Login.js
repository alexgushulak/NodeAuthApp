// React Component for Login Form

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // post to private api using axios content-type: application/json
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page refresh
        const data = { email, password };
        axios.post('http://localhost:5000/api/v1/auth/login', data)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                window.location.href = '/user';
            })
            // after logging response redirect GET private page
            .catch(err => {
                console.log(err);
            });


    }

    return (
        <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Username</label>
            <input type="text" name="email" id="email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
        </div>
    );
    };

export default Login;