import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="/Home">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Service">Services</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;