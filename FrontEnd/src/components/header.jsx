import React from 'react';
import Logout1 from './Logout1';
import './header.css';

function Header() {
    return (
    <nav class="nav bg-primary">
  <a class="nav-link active" aria-current="page" href="#">Fantasy</a>
  <a class="nav-link" href="#">Sportsbook</a>
  <a class="nav-link" href="#">Casino</a>
  <a class="nav-link" href="/forum">Forum</a>
  <a class="nav-link" href='/pages/login'> <Logout1/> </a>
</nav>

    );
}

export default Header;