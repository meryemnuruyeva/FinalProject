import { useState } from 'react';
import DesignCard from './DesignCard';

export default function FeaturedSlider({ designs }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % designs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + designs.length) % designs.length);
  };

  return (
    <section className="featured-slider">
      <div className="container">
        <div className="slider-header">
          <h2 className="section-title">Featured Collections</h2>
          <p className="section-subtitle">Explore our finest designs</p>
        </div>

        <div className="slider-wrapper">
          <button className="slider-button slider-prev" onClick={prevSlide}>
            ←
          </button>

          <div className="slider-track">
            <div 
              className="slider-content"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {designs.map((design, index) => (
                <div key={index} className="slider-item">
                  <DesignCard {...design} />
                </div>
              ))}
            </div>
          </div>

          <button className="slider-button slider-next" onClick={nextSlide}>
            →
          </button>
        </div>

        <div className="slider-indicators">
          {designs.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
