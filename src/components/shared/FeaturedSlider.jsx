import { useState } from 'react';
import { Link } from 'react-router-dom';
import DesignCard from './DesignCard';

export default function FeaturedSlider({ designs, title = 'Featured Collections', subtitle = 'Explore our finest designs' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDesign, setSelectedDesign] = useState(null);

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
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
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
                  <DesignCard
                    {...design}
                    onReadMore={() => setSelectedDesign(design)}
                  />
                </div>
              ))}
            </div>
          </div>

          <button className="slider-button slider-next" onClick={nextSlide}>
            →
          </button>
        </div>

        {selectedDesign && (
          <div className="slider-detail-panel">
            <div className="slider-detail-card">
              <h3>{selectedDesign.title}</h3>
              <p>
                {selectedDesign.description ||
                  (selectedDesign.descriptionLink &&
                    'A new story is waiting — tap below to experience the audio/video page.')}
              </p>
              <div className="slider-detail-actions">
                {selectedDesign.link && (
                  <Link to={selectedDesign.link} className="btn btn-primary">
                    View full story
                  </Link>
                )}
                {selectedDesign.descriptionLink && (
                  <Link to={selectedDesign.descriptionLink} className="btn btn-secondary">
                    Listen
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}

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
