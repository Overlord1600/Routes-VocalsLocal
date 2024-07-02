import React, { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import "./login.css";


function CustomLogin({setIsAuth}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (event) => {
       event.preventDefault();

        // Simple hardcoded check for demonstration purposes
        if (username === 'admin' && password === 'password') {
            navigate('/home');
            setIsAuth(true);
            alert('Login successful!');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>
            </form>
            <p className="login-link">
                Already have an account? <Link to="/register">Sign Up here</Link>
            </p>
        </div>
    );
};

export default CustomLogin;
