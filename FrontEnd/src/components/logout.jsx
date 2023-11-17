import React from 'react';
import { Link } from "react-router-dom";
import "./Login.css";

function Logout() {
    return (
        <div className="thankyou">
            <h2> You have logged out</h2>
            <p>Please sign in.</p>
            <Link to="/pages/home"><button>Go to your page</button></Link>
        </div>
    );
}

export default Logout;