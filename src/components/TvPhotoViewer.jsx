import { useState } from "react";
import "../styles/TvPhotoViewer.css"; // CSS included below


const photos = [
  "../assets/images/photo1.jpg",
  "../assets/images/photo2.jpg",
  "../assets/images/photo3.jpg",
  "../assets/images/photo4.jpg",
];

export default function TvPhotoViewer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="tv-container">
      <div className="tv-frame">
        <div className="photo-grid">3
          {photos.map((photo, index) => (
            <div
              className={`photo-tile ${hoveredIndex === index ? "active" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={index}
            >
              <img src={photo} alt={`photo-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
