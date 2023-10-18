import React from 'react';
import './header.css';

function Header() {
    return (
    <nav class="nav bg-primary">
  <a class="nav-link active" aria-current="page" href="#">Fantasy</a>
  <a class="nav-link" href="#">Sportsbook</a>
  <a class="nav-link" href="#">Casino</a>
</nav>

    );
}

export default Header;