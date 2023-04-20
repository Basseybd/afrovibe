import React, { useState } from "react";

interface ManualCarouselProps {
  images: {
    name: string;
    imagePath: string;
    altimagePath: string;
    imageDescription: string;
  }[];
}

export default function ManualCarousel(props: ManualCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
  };

  return (
    <div className="container mx-auto h-16 flex flex-wrap flex-col md:flex-row items-center transition ease-in-out duration-700 text-white hover:bg-white hover:text-black">
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="carousel-item">
            <img src="https://via.placeholder.com/300x200" alt="slide 1" />
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/300x200" alt="slide 2" />
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/300x200" alt="slide 3" />
          </div>
        </div>
        <button className="carousel-prev" onClick={handlePrevClick}>
          Prev
        </button>
        <button className="carousel-next" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}
