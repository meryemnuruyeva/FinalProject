import { useEffect, useState } from 'react';
import slide4 from '../../assets/images/slide4.jpeg';
import slider21 from '../../assets/images/slider21.jpg';
import slider22 from '../../assets/images/slider22.jpg';

const heroSlides = [
  {
    image: slide4,
    title: 'Betrayal to Strength',
    subtitle: 'Every broken piece creates new power',
  },
  {
    image: slider21,
    title: 'Confidence & Freedom',
    subtitle: 'True beauty begins when you trust yourself',
  },
  {
    image: slider22,
    title: 'Reborn Again',
    subtitle: 'From pain rises a brighter soul',
  },
];

export default function HeroVideo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[currentIndex];

  return (
    <section
      className="cinematic-section"
      style={{ backgroundImage: `url(${currentSlide.image})` }}
    >
      <div className="cinematic-overlay"></div>

      <div className="cinematic-content hero-center">
        <h1 className="cinematic-title">{currentSlide.title}</h1>
        <p className="cinematic-description">{currentSlide.subtitle}</p>
        <div className="cinematic-buttons">
          <button className="btn-primary">Discover</button>
          <button className="btn-secondary">Explore</button>
        </div>
      </div>

      <div className="hero-indicators">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`hero-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
