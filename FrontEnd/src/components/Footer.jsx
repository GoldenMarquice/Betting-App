import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer ">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Name</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/pages/home" className="nav-link p-0 text-muted">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/pages/lobby" className="nav-link p-0 text-muted">
                                    Lobby
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">
                                    GamePage/Contest
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">
                                    Pools
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">
                                    Fantasy
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-muted">
                                    SportsBook
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="" className="nav-link p-0 text-muted">
                                    Media
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/pages/profile" className="nav-link p-0 text-muted">
                                    Profile
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/pages/about" className="nav-link p-0 text-muted">
                                    About
                                </a>
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
                        src="https://sdgku.edu/wp-content/uploads/2014/10/sdgku-logo-small.png"
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
