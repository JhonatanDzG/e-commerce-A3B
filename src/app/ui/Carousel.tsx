"use client";

import React, { useState, useEffect } from "react";

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
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  // Effect for automatic slide
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 3000); // 3 seconds -> nextSlide
      return () => clearInterval(interval);
    }
  }, [isPaused, currentIndex]);

  const togglePause = () => {
    setIsPaused((prev)=>!prev)
  }

  return (
    <div className=" w-full  max-w-lg mx-auto bg-gray-200 p-4 rounded-lg mt-96">
      <h2 className="text-center text-2xl font-bold mb-4 ">{title}</h2>
      <div className=" flex items-center justify-center   overflow-hidden rounded-lg mb-4  h-60">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full object-contain transition-transform duration-500 ease-in-out"
        />
      </div>
      <p className="flex justify-center">{images[currentIndex].description}</p>
      <div className="flex justify-between ">
        <button onClick={prevSlide}>{"◀️"}</button>
        <button onClick={togglePause}>{isPaused ? "▶️" : "⏸️"}</button>
        <button onClick={nextSlide}>{"▶️"}</button>
      </div>
    </div>
  );
};

export default Carousel;
