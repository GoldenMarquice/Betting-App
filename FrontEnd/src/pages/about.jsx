import React from "react";
import './about.css';

function About() {
    return (
        <div className="about page">
            <h1>About Us Page</h1>
            <p> We are the team for Quick Bets</p>
        
            <h2 style={{ textAlign: 'center' }}>Our Team</h2>
        
            <div className="row" style={{ textAlign: 'center' }}>
                <div className="column">
                    <div className="card">
                        
                        <div className="container">
                        <img src="/img/marquice.jpeg" alt="Marquice"  />
                            <h2>Marquice Bowman</h2>
                            <p className="title">Software Developer</p>
                            <p>bowman.marquice@gmail.com</p>
                            <p><a href="https://github.com/GoldenMarquice"><button className="button">Contact</button></a></p>
                        </div>
                    </div>
                </div>
            
                <div className="column">
                    <div className="card">
                        <div className="container">
                        <img src="/img/me-braids.jpg" alt="Brandon Lile"  />
                            <h2>Brandon Lile</h2>
                            <p className="title">Software Developer</p>
                            <p>detroitking04@gmail.com</p>
                            <p><a href="https://github.com/BrandonL86"><button className="button">Contact</button></a></p>
                        </div>
                    </div>
                </div>
            
                <div className="column">
                    <div className="card">
                        <img src="/img/adam.jpeg" alt="Adam"  />
                        <div className="container">
                            <h2>Adam Young</h2>
                            <p className="title">Software Developer</p>
                            <p>Adam.young@sdgku.edu</p>
                            <p><a href="https://github.com/conchaking"><button className="button">Contact</button></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;