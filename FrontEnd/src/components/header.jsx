import React from 'react';
import { Link } from "react-router-dom";
import Logout1 from './Logout1';
import './header.css';

function Header() {
    return (
    <nav class="nav bg-primary">
  <Link class="nav-link active" aria-current="page" to="/pages/contest">Fantasy</Link>
  <Link class="nav-link" href="/forum">Forum</Link>
  <Link class="nav-link" href='/pages/login'> <Logout1/> </Link>
</nav>

    );
}

export default Header;