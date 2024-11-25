"use client";

import Image from "next/image";
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
  const [isExpanded, setIsExpanded] = useState(false);

  const nextSlide = () => {
    if(isExpanded){
      setIsExpanded(false);
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    if(!isExpanded){
      console.log(" if isExpanded");
      setIsExpanded(false);
      setIsPaused(false);
      
    }
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

    setIsPaused((prev) => !prev);
    console.log(isPaused);
    
  };
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);

    togglePause();
  };

  return (
    <div className=" w-full bg-gray-200 p-4 rounded-lg">
      <h2 className="text-center text-2xl font-bold mb-4 ">{title}</h2>
      <div className=" flex items-center justify-center   overflow-hidden rounded-lg mb-4  h-60">
        {/* Card for the current image */}
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center h-full max-w-36">
          <div className="relative w-full h-40 mb-2">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold">{images[currentIndex].alt}</h3>
          <div className="relative w-full">
            <div
              className={`text-sm text-gray-600 transition-all duration-300 ${
                isExpanded ? "h-32 overflow-y-auto" : "max-h-16 overflow-hidden"
              }`}
              style={{
                whiteSpace: isExpanded ? "normal" : "nowrap",
                textOverflow: isExpanded ? "clip" : "ellipsis",
              }}
            >
              {images[currentIndex].description}
            </div>
            {images[currentIndex].description.length > 100 && !isExpanded && (
              <button onClick={toggleExpand} className="text-blue-500 mt-2">
                See more
              </button>
            )}
            {isExpanded && (
              <button onClick={toggleExpand} className="text-blue-500 mt-2">
                See less
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between ">
        <button onClick={prevSlide}>{"◀️"}</button>
        <button onClick={togglePause}>{isPaused ? "▶️" : "⏸️"}</button>
        <button onClick={nextSlide}>{"▶️"}</button>
      </div>
    </div>
  );
};

export default Carousel;
