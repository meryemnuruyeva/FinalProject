import React from "react";
import emotions from "../data/emotions";
import EmotionCard from "../components/EmotionCard";
import Navbar from "../components/Navbar";
import HeroVideo from "../components/HeroVideo";
import FeaturedSlider from "../pages/FeaturedSlider";
import EmotinBlogSection from "../components/EmotinBlogSection";
import DesignCard from "../components/DesignCard";

const Home = () => {
    return (
        <div className="bg-black text-white">
            <Navbar/>
            <HeroVideo/>
            <FeaturedSlider/>
            <EmotinBlogSection/>
            <DesignCard/>
        </div>
    );
};

export default Home;