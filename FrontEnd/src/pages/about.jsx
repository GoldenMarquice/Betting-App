import React from "react";
import './about.css';

function About() {
    return (
        <div className="about page">
            <h1>About Us Page</h1>
            <p>Some text about who we are and what we do.</p>
            <p>Resize the browser window to see that this page is responsive by the way.</p>
        
            <h2 style={{ textAlign: 'center' }}>Our Team</h2>
        
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src="" alt="Marquice" style={{ width: '100%' }} />
                        <div className="container">
                            <h2>Marquice Bowman</h2>
                            <p className="title">Software Developer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>Marquice@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            
                <div className="column">
                    <div className="card">
                        <img src="" alt="Brandon Lile" style={{ width: '100%' }} />
                        <div className="container">
                            <h2>Brandon Lile</h2>
                            <p className="title">Software Developer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>Brandon@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            
                <div className="column">
                    <div className="card">
                        <img src="" alt="Adam" style={{ width: '100%' }} />
                        <div className="container">
                            <h2>Adam Young</h2>
                            <p className="title">Software Developer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>Adam@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;