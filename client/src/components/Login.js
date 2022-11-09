// React Component for Login Form

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Label, Input} from 'reactstrap';
import axios from 'axios';
import '../App.css';

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
        <div className="loginContainer">
        <Form className="loginForm" onSubmit={handleSubmit}>
            <div className="floatLeft">
                <Input className="loginInput" placeholder="Email" type="email" name="email" id="email" autoComplete="off" value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="floatLeft">
                <Input className="loginInput" placeholder="Password" type="password" name="password" id="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Button className="loginButton" color="primary" type="submit">Log In</Button>
        </Form>
        </div>
    );
    };

export default Login;