import React from "react";
import FeaturedSlider from "../components/shared/FeaturedSlider";
import HeroVideo from "../components/shared/HeroVideo";

const Home = () => {
    return (
        <div className="bg-black text-white">
            <FeaturedSlider />
            <HeroVideo />
        </div>
    );
};

export default Home;