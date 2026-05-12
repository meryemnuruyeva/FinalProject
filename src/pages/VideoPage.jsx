import { Link } from 'react-router-dom';

export default function VideoPage() {
  return (
    <section className="video-page">
      <div className="container">
        <div className="video-page-content">
          <div className="video-copy">
            <span className="detail-label">Duymeye</span>
            <h1>Listen to the Story</h1>
            <p>
              Experience the mood and emotion behind the design with this
              exclusive video. Press play, then let the visuals and sound guide
              you through the next chapter.
            </p>
          </div>

          <div className="video-wrapper">
            <video className="video-player" controls>
              <source src="/videos/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <Link to="/" className="btn btn-primary video-back-btn">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
