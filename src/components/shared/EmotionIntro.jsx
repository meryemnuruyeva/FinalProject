
import { Link } from 'react-router-dom';

export default function EmotionIntro() {
  return (
    <section className="emotion-intro">
      <div className="container">
        <div className="intro-content">
          <div className="intro-text">
            <h2>Design is Emotion</h2>
            <p>
              Every piece tells a story — a moment, a feeling, a transformation.
              Fashion is not just what you wear, it’s who you become.
            </p>
            <Link to="/video" className="btn-primary">
              Discover the Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
