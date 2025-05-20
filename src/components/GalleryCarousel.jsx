import React, { useState, useEffect } from "react";

import "./GalleryCarousel.css";

const images = [
  "./images/carousel/1.jpg",
  "./images/carousel/3.jpg",
  "./images/carousel/4.jpg",
  "./images/carousel/7.jpg",
  "./images/carousel/8.jpg",
  "./images/carousel/9.jpg",
  "./images/carousel/10.jpg",
];

const GalleryCarousel = () => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setMainImage(images[index]);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setMainImage(images[nextIndex]);
      setCurrentIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex, images]);

  return (
    <div className="carousel-container">
      {/* Main Image */}
      <div className="main-image">
        <img src={mainImage} alt="Main" className="fade" />
      </div>

      {/* Thumbnails */}
      <div className="thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail-wrapper ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCarousel;
