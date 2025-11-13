import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
       <div className="logo">
        <img src="https://tse2.mm.bing.net/th/id/OIP.0YhbIQCXaSFU4yKvQe8tQAHaCN?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Era marya" />
      </div>
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