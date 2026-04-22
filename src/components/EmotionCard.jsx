import React from "react";

const EmotionCard = ({ emotion }) => {
    return (
        <div className="emotion-card">
            <img src="{emotion.image}" alt="{emotion.title}" />

            <div className="emotion-content">
                <h3>{emotion.title}</h3>
                <h4>{emotion.subtitle}</h4>
                <p>{emotion.description}</p>
                <button>Explore</button>
            </div>
        </div>
    );
};

export default EmotionCard;