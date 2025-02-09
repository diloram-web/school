import React, { useState } from "react";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Keyingi slayderga o'tish
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Oldingi slayderga o'tish
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
         <h1 className="my-h1">Мектебим менин сыймыгым!!!</h1>
    <div className="carousel-container">
      <div className="carousel">
        <button className="carousel-button" onClick={handlePrevious}>
          <FaLessThan />
        </button>
        <div className="carousel-image">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
        <button className="carousel-button" onClick={handleNext}>
        <FaGreaterThan />
        </button>
      </div>
    </div>
    </div>
  );
};

export default Carousel;