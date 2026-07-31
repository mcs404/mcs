import "./Navbar.css";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="logo">
        <div className="logo-box">MCS</div>

        <div>
          <h2>Mirsarai Computer Service</h2>
          <span>Computer Service | Printing | Studio</span>
        </div>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#gallery">Gallery</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
