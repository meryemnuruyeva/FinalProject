import React from "react";
import "../styles/global.css";

const DesignCard = () => {
  const designs = [
    {
      id: 1,
      title: "Emotional Design",
      image: "/assets/images/design1.jpg",
      date: "10 FEB",
    },
    {
      id: 2,
      title: "Modern Style",
      image: "/assets/images/design2.jpg",
      date: "6 MAR",
    },
    {
      id: 3,
      title: "Luxury Concept",
      image: "/assets/images/design3.jpg",
      date: "20 APR",
    },
  ];

  return (
    <section className="design-section">
      <div className="design-container">
        {designs.map((item) => (
          <div className="design-card" key={item.id}>
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} />
              <span className="date">{item.date}</span>
            </div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignCard;