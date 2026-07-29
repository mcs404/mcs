import "./About.css";
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
            ✔ Reliable Service
          </div>

          <div className="feature-card">
            ✔ Quality Work
          </div>

          <div className="feature-card">
            ✔ Customer Support
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;