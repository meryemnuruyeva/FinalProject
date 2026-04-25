import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/images/gold.jpg";

const Navbar = () => {
  return (
    <header className="relative w-full h-[280px] overflow-hidden">

      {/* background image */}
      <img
        src="../src/assets/images/gold.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">

        {/* logo */}
        <div className="text-center mb-6">
          <h1 className="font-serif text-5xl tracking-[10px] text-white">
            Renaissance
          </h1>
          <p className="text-gray-300 text-sm">
            Your Style, Your Story
          </p>
        </div>

        {/* menu */}
        <nav className="flex gap-10 text-sm tracking-[3px]">
          <NavLink to="/" className={({isActive}) =>
            isActive ? "text-[#D4AF37]" : "text-gray-300 hover:text-[#D4AF37]"
          }>HOME</NavLink>

          <NavLink to="/explore" className={({isActive}) =>
            isActive ? "text-[#D4AF37]" : "text-gray-300 hover:text-[#D4AF37]"
          }>EXPLORE</NavLink>

          <NavLink to="/create" className={({isActive}) =>
            isActive ? "text-[#D4AF37]" : "text-gray-300 hover:text-[#D4AF37]"
          }>CREATE</NavLink>

          <NavLink to="/profile" className={({isActive}) =>
            isActive ? "text-[#D4AF37]" : "text-gray-300 hover:text-[#D4AF37]"
          }>PROFILE</NavLink>

          <NavLink to="/login" className={({isActive}) =>
            isActive ? "text-[#D4AF37]" : "text-gray-300 hover:text-[#D4AF37]"
          }>LOGIN</NavLink>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;