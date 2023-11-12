import React from "react";
import "./Footer.css";

function Footer() {

    return (

        <div class="footer">
            <footer class="py-5">
                <div class="row">
                    <div class="col-6 col-md-2 mb-3">
                        <h5>Name</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="/pages/home" class="nav-link p-0 text-muted">Home</a></li>
                            <li class="nav-item mb-2"><a href="/pages/lobby" class="nav-link p-0 text-muted">Lobby</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">GamePage/Contest</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pools</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Fantasy</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">SportsBook</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Media</a></li>
                            <li class="nav-item mb-2"><a href="/pages/profile" class="nav-link p-0 text-muted">Profile</a></li>
                            <li class="nav-item mb-2"><a href="/pages/about" class="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>
                    <div class="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label for="newsletter1" class="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                                    <button class="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="sdgku">
                    <a href="https://sdgku.edu/" target="blank">
                        <img src="https://sdgku.edu/wp-content/uploads/2014/10/sdgku-logo-small.png" alt=""></img>
                    </a> 
                    <p>© 2022-2023 San Diego Global Knowledge University. All rights reserved.</p>
                    <div class="social-media">
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;