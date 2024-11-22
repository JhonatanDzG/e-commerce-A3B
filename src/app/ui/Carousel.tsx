'use client'

import React, { useState } from "react";

interface Image {
  src: string;
  alt: string;
  description: string;
}

interface CarouselProps {
  title: string;
  images: Image[];
}

const Carousel: React.FC<CarouselProps> = ({ title, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <h2 className="text-center text-2xl font-bold mb-4">{title}</h2>
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-auto transition-transform duration-500 ease-in-out"
        />
        <p>
          {images[currentIndex].description}
        </p>
      </div>
      <div>
        <button>{"⏸️"}</button>
        <button onClick={prevSlide}>{"<"}</button>
        <button onClick={nextSlide}>{">"}</button>
      </div>
    </div>
  );
};

export default Carousel;
