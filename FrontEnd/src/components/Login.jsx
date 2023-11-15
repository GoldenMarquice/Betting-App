import React, { createContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Profile from '../pages/profile';
import LoginService from '../services/loginService';
import "./Login.css";

const UserContext = createContext();

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);



    useEffect(() => {
        // user is already logged in
        const token = localStorage.getItem('token');
        if (token) {
            const service = new LoginService();
            service.myInfo()
                .then((myInfo) => {
                    setUser({ username: myInfo.username, email: myInfo.email });//user is seting setUser state
                    setLoggedIn(true);
                    Profile.fetchWalletData();
                })
                .catch(() => {
                    console.log("Invalid token or user data");
                    localStorage.removeItem('token');
                });
        }
    }, []);

    const handleLogin = async () => {
        if (username && password) {
            const service = new LoginService();
            try {
                const response = await service.login(username, password);
                console.log("Logged In", response.token)

                localStorage.setItem('token', response.token);
                const myInfo = await service.myInfo();
                console.log(myInfo)

                setUser({ username: myInfo.username, email: myInfo.email });// Adjust accordingly
                setLoggedIn(true);
                window.location.reload();
            } catch {
                console.log("Invalid Credentials")
            }
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token')
        setUser(null);
        setLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    const [user, setUser] = useState(null);

    

    return (
        <UserContext.Provider value={user}>
            <div className="login card">
                <div className="login card-body">
                    {loggedIn ? (
                        <div>
                            <h2>Welcome, {user.username}!</h2>
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
                                <Link to="/pages/profile">
                                    <button onClick={handleLogin}>Login</button>
                                </Link>
                            </div>
                        
                            <p>Don't have an account? <Link to="/pages/signup"><button>Signup</button></Link></p>
                        </div>
                    )}
                </div>
            </div>
        </UserContext.Provider>
    );
}

// use effect
// async function 
// LoadData 


export default Login;