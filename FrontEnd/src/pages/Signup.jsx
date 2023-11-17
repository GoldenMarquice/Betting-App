import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Signup.css";

function Signup() {
    const Navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [DateOfBirth, setDateOfBirth] = useState('');
    const handleSignup = (e) => {
        const birthDate = new Date(DateOfBirth);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - birthDate.getFullYear();

        if (age < 18) {
            console.log("You must be at least 18 years old to sign up.");
            alert("You must be at least 18 years old to sign up.");
            e.preventDefault();
            return;

        }
        console.log("Signup logic goes here");

        Navigate('/pages/thankyouSign');
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
            <label htmlFor="">Must be at least 18</label> 
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