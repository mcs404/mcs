import "./Contact.css";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>

      <p className="contact-text">
        Get in touch with MCS for computer service, printing and digital
        solutions.
      </p>

      <div className="contact-grid">
        <a href="tel:01307646616" className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
          <p>01307646616</p>
        </a>

        <a
          href="https://wa.me/01307646616"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaWhatsapp className="contact-icon" />
          <h3>WhatsApp</h3>
          <p>Chat with us</p>
        </a>

        <a href="mailto:yourmail@example.com" className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>yourmail@example.com</p>
        </a>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Location</h3>
          <p>Mirsarai, Chattogram</p>
        </div>
        <a
          href="https://www.facebook.com/mirsarai.computer.service"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaFacebookF className="contact-icon" />

          <h3>Facebook</h3>

          <p>Visit Our Page</p>
        </a>
      </div>
    </section>
  );
}

export default Contact;
