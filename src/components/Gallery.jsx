import "./Gallery.css";

import computerService from "../assets/gallery/computer-service.jpg";
import printingService from "../assets/gallery/printing-service.jpg";
import studioService from "../assets/gallery/studio-service.jpg";
import networking from "../assets/gallery/networking.jpg";
import laptopRepair from "../assets/gallery/laptop-repair.jpg";
import computerShop from "../assets/gallery/computer-shop.jpg";

function Gallery() {
  const galleryItems = [
    { image: computerService, title: "Computer Service" },
    { image: printingService, title: "Printing Service" },
    { image: studioService, title: "Studio Service" },
    { image: networking, title: "Networking" },
    { image: laptopRepair, title: "Laptop Repair" },
    { image: computerShop, title: "Our Shop" },
  ];

  return (
    <section className="gallery" id="gallery">
      <h2>Our Gallery</h2>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="gallery-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;