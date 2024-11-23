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
    <div className=" w-full  max-w-lg mx-auto bg-gray-200 p-4 rounded-lg mt-96">
      <h2 className="text-center text-2xl font-bold mb-4 " >{title}</h2>
      <div className=" flex items-center justify-center   overflow-hidden rounded-lg mb-4  h-60" >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full object-contain transition-transform duration-500 ease-in-out"
        />

      </div>
        <p className="flex justify-center">
          {images[currentIndex].description}
        </p>
      <div className="flex justify-between ">
        <button onClick={prevSlide}>{"◀️"}</button>
        <button>{"⏸️"}</button>
        <button onClick={nextSlide}>{"▶️"}</button>
      </div>
    </div>
  );
};

export default Carousel;
