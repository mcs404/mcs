import "./Gallery.css";

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">

        <h2>Our Gallery</h2>

        <p className="gallery-text">
          A glimpse of our computer service, printing, studio, and networking
          solutions.
        </p>

        <div className="gallery-grid">

          <div className="gallery-card">
            <div className="gallery-image">Computer Setup</div>
          </div>

          <div className="gallery-card">
            <div className="gallery-image">Printing Service</div>
          </div>

          <div className="gallery-card">
            <div className="gallery-image">Digital Studio</div>
          </div>

          <div className="gallery-card">
            <div className="gallery-image">Networking</div>
          </div>

          <div className="gallery-card">
            <div className="gallery-image">Laptop Repair</div>
          </div>

          <div className="gallery-card">
            <div className="gallery-image">Customer Service</div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Gallery;