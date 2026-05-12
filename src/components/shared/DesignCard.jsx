
import { Link } from 'react-router-dom';

export default function DesignCard({ title, description, descriptionLink, label, image, link, onReadMore }) {
  const handleClick = (event) => {
    if (onReadMore) {
      event.preventDefault();
      onReadMore();
    }
  };

  return (
    <div className="design-card">
      <div className="card-image-wrapper">
        <div 
          className="card-image"
          style={{
            backgroundImage: image ? `url(${image})` : 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
          }}
        >
          {label && <span className="card-label">{label}</span>}
        </div>
        <div className="card-overlay"></div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">
          {description}
          {descriptionLink && (
            <Link to={descriptionLink} className="card-description-link">
              duymeye
            </Link>
          )}
        </p>
        {link ? (
          <Link to={link} className="read-more" onClick={handleClick}>
            READ MORE →
          </Link>
        ) : (
          <button type="button" className="read-more" onClick={handleClick}>
            READ MORE →
          </button>
        )}
      </div>
    </div>
  );
}
