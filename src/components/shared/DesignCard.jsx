import React from "react";

const DesignCard = ({ image, date, title, description }) => {
  return (
    <div className="relative group overflow-hidden cursor-pointer">
      
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      {/* DATE */}
      <div className="absolute top-4 left-4 text-[#d4af37] font-serif">
        <span className="block text-lg font-bold">{date.day}</span>
        <span className="text-xs tracking-widest">{date.month}</span>
      </div>

      {/* CONTENT */}
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <h3 className="text-xl font-serif mb-2">{title}</h3>
        <p className="text-sm opacity-70">{description}</p>

        <span className="inline-block mt-3 text-xs tracking-widest text-[#d4af37] transition-all duration-300 group-hover:tracking-[4px]">
          READ MORE →
        </span>
      </div>
    </div>
  );
};

export default DesignCard;