// src/pages/DesignDetail.jsx

import { useParams, Link } from 'react-router-dom';
import { designDetails } from '../data/designDetails';

export default function DesignDetail() {
  const { designId } = useParams();

  const design = designDetails.find(
    (item) => item.id === designId
  );

  if (!design) {
    return (
      <div className="container">
        <h2>Design not found</h2>
      </div>
    );
  }

  return (
    <section className="design-detail-page">
      <div className="container">

        <div className="custom-detail-layout">

          {/* LEFT SIDE */}
          <div className="left-column">

            <div
              className="detail-image"
              style={{
                backgroundImage: `url(${design.image})`
              }}
            >
              <div className="detail-image-overlay">
                <h1>{design.title}</h1>
              </div>
            </div>

            {/* DETAILS MOVED UNDER IMAGE */}
            <div className="detail-bottom-box">

              {design.detailsHeading && (
                <h2 className="detail-section-title">
                  {design.detailsHeading}
                </h2>
              )}

              <div className="detail-list">
                {design.details.map((item, index) => (
                  <p key={index}>
                    • {item}
                  </p>
                ))}
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="detail-copy">

            <span className="detail-label">
              {design.subtitle}
            </span>

            <p className="detail-description">
              {design.description}
            </p>

            {design.story && (
              <div className="detail-story">
                {design.story.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};