import  { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
import './BannerSlider.css';

const images = [
  {
    url: '/Images/banner1.jpg',
  },
  {
    url: '/Images/banner2.jpg',
  },
  {
    url: '/Images/banner3.jpg',
  },
  {
    url: '/Images/banner4.jpg',
  },
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner-slider">
      {/* Image Container */}
      <div
        className="image-container"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        //   width: `${images.length *30}%`
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="image-slide">
            <img
              src={`${image.url}?auto=format&fit=crop&w=1920&q=80`}
              alt={image.caption}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="navigation-button button-left"
        aria-label="Previous slide"
      >
        {/* <ChevronLeft size={24} /> */}
      </button>
      <button
        onClick={nextSlide}
        className="navigation-button button-right"
        aria-label="Next slide"
      >
        {/* <ChevronRight size={24} /> */}
      </button>

      {/* Dots Indicator */}
      <div className="indicator-container">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
