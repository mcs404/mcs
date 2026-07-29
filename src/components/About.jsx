import "./About.css";
import { FaShieldAlt, FaAward, FaHeadset } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About MCS</h2>

        <p className="about-text">
          MCS (Mirsarai Computer Service) is a trusted digital solution provider
          offering Computer Service, Printing, Studio, and Networking solutions
          for individuals, students, businesses, and organizations.
        </p>

        <p className="about-text">
          We are committed to delivering reliable service, quality workmanship,
          and customer-friendly support with honesty and professionalism.
        </p>

        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">
              <FaShieldAlt />
            </div>

            <h3>Reliable Service</h3>

            <p>Fast, trusted and professional computer solutions.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaAward />
            </div>

            <h3>Quality Work</h3>

            <p>
              We focus on quality and customer satisfaction in every service.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaHeadset />
            </div>

            <h3>Customer Support</h3>

            <p>Friendly support before and after every service.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
