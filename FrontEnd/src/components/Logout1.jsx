import React, { createContext, useState } from 'react';
import { Link } from "react-router-dom";
import "./Login.css";


const UserContext = createContext();
const setUser = () => {}; 

function Logout1() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token')
        setUser(null);
        setLoggedIn(false);
        setUsername('');
        setPassword('');
        window.alert('You have been logged out.');
    };

    return (
        <div>
            <Link to="/pages/Login"> </Link>
            <button className="submit" onClick={handleLogout}>Log Out</button>
        </div>
    );
}

export default Logout1;
