
export default function HeroVideo() {
  return (
    <section className="hero-section">
      {/* Background */}
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-content-wrapper">
          <div className="hero-image-container">
            {/* Hero Main Image - Using CSS gradient to simulate the dark eyes image */}
            <div className="hero-main-image"></div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">Betrayal to Strength</h1>
            <p className="hero-subtitle">Every broken piece creates new power</p>
            
            {/* Slider indicators */}
            <div className="slider-indicators">
              <button className="indicator active"></button>
              <button className="indicator"></button>
              <button className="indicator"></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
