import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>

        <p className="contact-text">
          Need computer service, printing, networking, or studio solutions?
          Feel free to contact us. We're always ready to help.
        </p>

        <div className="contact-cards">

          <div className="contact-card">
            <h3>📞 Phone</h3>
            <p>01XXXXXXXXX</p>
          </div>

          <div className="contact-card">
            <h3>💬 WhatsApp</h3>
            <p>01XXXXXXXXX</p>
          </div>

          <div className="contact-card">
            <h3>✉️ Email</h3>
            <p>yourmail@example.com</p>
          </div>

          <div className="contact-card">
            <h3>📍 Address</h3>
            <p>Mirsarai, Chattogram</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;