import React, { useState } from 'react';
import "./Login.css";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        if (username && password) {
            setLoggedIn(true);
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    return (
        <div className="login card">
            <div className="login card-body">
                {loggedIn ? (
                    <div>
                        <h2>Welcome, {username}!</h2>
                        <button onClick={handleLogout}>Log Out</button>
                    </div>
                ) : (
                    <div>
                        <h2>Login</h2>
                        <div>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button onClick={handleLogin}>Login</button>
                        </div>
                        <div>
                            <button onClick={handleLogout}>Log Out</button>
                        </div>
                        <p>Don't have an account? <a href="/pages/Signup">Sign Up</a></p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;