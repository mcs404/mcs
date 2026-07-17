import "./App.css";
import { FaWhatsapp } from "react-icons/fa";
import Header from "./components/Header";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Header />
      <Services />

      <section className="about" id="about">
        <h2>About MCS</h2>

        <p>
          MCS — Mirsarai Computer Service is a digital solution provider
          offering Computer Service, Printing, Studio and Networking solutions.
        </p>

        <p>
          Our goal is to provide reliable service, quality work and
          customer-friendly solutions.
        </p>

        <div className="features">
          <div>✔ Reliable Service</div>

          <div>✔ Quality Work</div>

          <div>✔ Customer Support</div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Us</h2>

        <p>
          Get in touch with MCS for computer service, printing and digital
          solutions.
        </p>

        <div className="contact-info">
          <p>📞 Phone: 01XXXXXXXXX</p>

          <p>💬 WhatsApp: 01XXXXXXXXX</p>

          <p>✉️ Email: yourmail@example.com</p>

          <p>📍 Location: Mirsarai, Chattogram</p>
        </div>
      </section>

      <section className="gallery">
        <h2>Our Gallery</h2>

        <div className="gallery-container">
          <div className="gallery-box">Computer Setup</div>

          <div className="gallery-box">Printing Service</div>

          <div className="gallery-box">Digital Studio</div>
        </div>
      </section>

      <a
        href="https://wa.me/8801XXXXXXXXX"
        className="whatsapp-btn"
        target="_blank"
      >
        <FaWhatsapp />
      </a>

      <footer className="footer">
        <h3>MCS</h3>

        <p>Mirsarai Computer Service</p>

        <p>Computer Service | Printing | Studio | Digital Solution</p>

        <p>© 2026 MCS. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
