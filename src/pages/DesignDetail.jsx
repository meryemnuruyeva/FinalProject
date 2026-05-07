import { useParams, Link } from 'react-router-dom';
import { designDetails } from '../data/designDetails';

export default function DesignDetail() {
  const { designId } = useParams();
  const design = designDetails.find((item) => item.id === designId);

  if (!design) {
    return (
      <div className="container">
        <div className="detail-page">
          <h2>Design not found</h2>
          <p>The design you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="design-detail-page">
      <div className="container">
        <div className="detail-hero">
          <div
            className="detail-image"
            style={{ backgroundImage: `url(${design.image})` }}
          />
          <div className="detail-copy">
            <span className="detail-label">{design.subtitle}</span>
            <h1>{design.title}</h1>
            <p className="detail-description">{design.description}</p>
            {design.story && (
              <div className="detail-story">
                {design.story.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
            {design.detailsHeading && <h2 className="detail-section-title">{design.detailsHeading}</h2>}
            <div className="detail-list">
              {design.details.map((item, index) => (
                <p key={index}>• {item}</p>
              ))}
            </div>
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
