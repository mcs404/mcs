import { FaLaptop, FaPrint, FaCamera } from "react-icons/fa";

function Services() {
  return (
    <section id="services">
      <h2>Our Services</h2>

      <div className="services-container">
        <div className="service-card">
          <h3>
            <FaLaptop /> Computer Service
          </h3>
          <p>
            Desktop & Laptop repair, software setup and troubleshooting.
          </p>
        </div>

        <div className="service-card">
          <h3>
            <FaPrint /> Printing Service
          </h3>
          <p>
            Color printing, photocopy, scanning and document solutions.
          </p>
        </div>

        <div className="service-card">
          <h3>
            <FaCamera /> Studio Service
          </h3>
          <p>
            Passport photo, photo editing and digital studio service.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;