import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h3>MCS</h3>

        <p className="footer-title">
          Mirsarai Computer Service
        </p>

        <p className="footer-description">
          Computer Service | Printing | Studio | Networking
        </p>

        <div className="footer-contact">
          <p>📞 01XXXXXXXXX</p>
          <p>✉️ yourmail@example.com</p>
          <p>📍 Mirsarai, Chattogram</p>
        </div>

        <hr />

        <p className="copyright">
          © 2026 MCS. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;