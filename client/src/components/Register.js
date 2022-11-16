import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         console.log(localStorage.getItem('token'))
    //         navigate("/user")
    //    }
    // }, [navigate]);

    const handleRegistration = (event) => {
        event.preventDefault();
        const data = { username, email, password };

        axios.post('http://localhost:5000/api/v1/auth/register', data)
            .then(res => {
                window.location.href = '/login';
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="formContainer">
            <Form className="registerForm" onSubmit={handleRegistration}>
                {/* Username Entry */}
                <div className="floatLeft">
                    <Input className="loginInput" placeholder="Username" type="username" name="username" id="username" autoComplete="off" value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                {/* Email Entry */}
                <div className="floatLeft">
                <Input className="loginInput" placeholder="Email" type="email" name="email" id="email" autoComplete="off" value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                {/* Password Entry */}
                <div className="floatLeft">
                <Input className="loginInput" placeholder="Password" type="password" name="password" id="password" autoComplete="off" value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <Button className="submitButton" color="danger" type="submit">Register</Button>
            </Form>
        </div>
    );
};

export default Register;