import React, { useState } from 'react';
import LoginService from '../services/loginService';


import "./Login.css";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);


    const handleLogin = async () => {
        if (username && password) {
            const service = new LoginService();
            try{
                const response = await service.login(username, password);
                console.log("Logged In", response.token)

                localStorage.setItem('token', response.token);
                const myInfo = await service.myInfo();
                console.log(myInfo)
            }
            catch{
                console.log("Invalid Credentials")
            }
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
                {loggedIn ? (<div>
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
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
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
};

// use effect
// async function 
// LoadData 


export default Login;