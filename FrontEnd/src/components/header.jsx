import React from 'react';
import Logout1 from './Logout1';
import './header.css';
import {Link} from "react-router-dom";

function Header() {
    return (
    <nav class="nav bg-primary">
  <Link class="nav-link active" aria-current="page" to="/pages/contest">Fantasy</Link>
  <a class="nav-link" href="#">Sportsbook</a>
  <a class="nav-link" href="#">Casino</a>
  <a class="nav-link" href="/forum">Forum</a>
  <a class="nav-link" href='/pages/login'> <Logout1/> </a>
</nav>

    );
}

export default Header;