import React, { useState } from 'react';
import "./Signup.css";

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [DateOfBirth, setDateOfBirth] = useState('');
    

    const handleSignup = () => {
        console.log("Signup logic goes here");
    };

    return (
        <div className="signup">
            <div className="signup card">
                <h2>Sign Up</h2>
                <h2>Please add your details </h2>
                <div className="signup input">
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </div>
                <div className="signup input">
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="signup input">
                    <input
                        type="date"
                        placeholder="Date of Birth"
                        value={DateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                </div>
                <div className="signup input">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="signup input">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
            <div className="signup input">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div >
            <div className="signup button">
                <a href='/pages/thankyouSign'><button onClick={handleSignup}>Sign Up</button></a>
            </div>
            </div>
        </div>
    );
}

export default Signup;