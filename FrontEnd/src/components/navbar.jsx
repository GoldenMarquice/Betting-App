import React from 'react';
import './navbar.css';

function MainNav() {
    return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <a class="navbar-brand" href="#">Logo</a>
                <button class="navbar-toggler"
                    type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Lobby</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">GamePage/Contest</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pools</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-disabled="true">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-disabled="true">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-disabled="true">Social</a>
                    </li>
                    <li class="nav-item">
                        <a href="/pages/profile" class="nav-link">Profile</a>
                        </li>
                    <li class="nav-item">
                        <a href="/pages/about" class="nav-link">About</a></li>
                    </ul>
                </div>
        

                <div className="container-fluid2">
                    <div className='nav-text'>
                        <span className="get-cash" data-test-id="data-chunk-value" theme="[object Object]">Get cash</span>
                        <span className="refer-friends" data-test-id="data-chunk-label" theme="[object Object]">Refer Friends</span>
                    </div>
                    <div className="funds">
                        <svg fill="#2D5BFF" viewBox="0 0 512 512" width="29" height="29" id="user-indicator-player">
                        <path d="M123.587 171.034v27.382c0 90.743 52.967 177.993 132.416 177.993 79.221 0 132.412-87.25 132.412-177.993v-27.382c0-90.743-54.611-130.073-132.413-130.073-79.448 0-132.416 39.331-132.416 130.073zM512 512H0c0-77.526 84.463-137.185 153.304-143.776 27.683 27.098 62.826 43.495 102.698 43.495 39.794 0 74.916-16.406 102.603-43.504 68.858 6.55 153.396 66.228 153.396 143.785z"></path>
                        </svg>
                    </div>
                    <div className="balance">
                        <span className="cash-balance" data-test-id="data-chunk-value" theme="[object Object]">$0</span> <br></br>
                        <span className="navbar-balance" data-test-id="data-chunk-label" theme="[object Object]">Balance</span>
                    </div>
                        <button type="button" className="btn btn-success" id="btn-funds">Add Funds</button>
                </div>
    </nav>
    );
}

export default MainNav;





