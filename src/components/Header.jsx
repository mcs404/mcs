function Header() {
  return (
    <header id="home">
      <nav>
        <div className="logo">
          <div className="logo-box">MCS</div>

          <div>
            <h2>Mirsarai Computer Service</h2>
            <span>Computer Service | Printing | Studio</span>
          </div>
        </div>

        <ul>
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
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

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