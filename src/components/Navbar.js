import React, { useState } from "react";
import "./Navbar.css";
import { Home, Wrench, Info, Phone } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://tse2.mm.bing.net/th/id/OIP.0YhbIQCXaSFU4yKvQe8tQAHaCN?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Era marya" />
      </div>

      <button className="toggle-btn" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
  <li>
    <a href="/">
      <Home size={20} /> Home
    </a>
  </li>

  <li>
    <a href="/service">
      <Wrench size={18} /> Services
    </a>
  </li>

  <li>
    <a href="/about">
      <Info size={18} /> About
    </a>
  </li>

  <li>
    <a href="/contact">
      <Phone size={18} /> Contact
    </a>
  </li>
</ul>

    </nav>
  );
}
