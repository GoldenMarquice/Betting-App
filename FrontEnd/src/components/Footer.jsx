import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer ">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                    <Link to="/pages/home" style={{ display: 'inline-block', textDecoration: 'none' }}>
            <img src="/QBlogo-white.svg" alt="Logo" style={{ width: '140px', height: 'auto' }} />
            </Link>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link href="/pages/home" className="nav-link p-0 text-muted">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link href="/pages/lobby" className="nav-link p-0 text-muted">
                                    Lobby
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/pages/contest" className="nav-link p-0 text-muted">
                                    Contest
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                            <Link to="/forum" className="nav-link p-0 text-muted">
                                    Forum
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/pages/profile" className="nav-link p-0 text-muted">
                                    Profile
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/pages/about" className="nav-link p-0 text-muted">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/pages/login" className="nav-link p-0 text-muted">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/pages/Signup" className="nav-link p-0 text-muted">
                                    Signup
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <h5>Subscribe to our newsletter</h5>
                        <p>Monthly digest of what's new and exciting from us.</p>
                        <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label htmlFor="newsletter1" className="visually-hidden">
                                Email address
                            </label>
                            <input
                                id="newsletter1"
                                type="text"
                                className="form-control"
                                placeholder="Email address"
                            />
                            <button className="btn btn-primary" type="button">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer sdgku">
                <a href="https://sdgku.edu/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/img/SDGKU.jpg"
                        alt=""
                    />
                </a>
                <p>© 2022-2023 San Diego Global Knowledge University. All rights reserved.</p>

                <div className="social-media">
                </div>
            </div>
        </div>
    );
}

export default Footer;
