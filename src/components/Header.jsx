import { useEffect, useState } from "react";
import "./Header.css";
import heroImage from "../assets/images/hero.png";

function Header() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="home" style={{ backgroundImage: `url(${heroImage})`,}}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>MCS</h1>
        <h2>Mirsarai Computer Service</h2>

        <p>Your Trusted Digital Service Partner</p>

        <p>Computer Repair | Printing | Studio | Networking</p>

        <a href="tel:01XXXXXXXXX" className="contact-btn">
          Contact Now
        </a>
      </div>
    </header>
  );
}

export default Header;
