import React from "react";

const EmotionCard = ({ title, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300">
      
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />

      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        <button className="px-4 py-2 bg-black text-white rounded-lg text-sm">
          START FEELING
        </button>
      </div>

    </div>
  );
};

export default EmotionCard;