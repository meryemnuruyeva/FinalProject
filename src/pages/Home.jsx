import React from "react";
import FeaturedSlider from "../components/shared/FeaturedSlider";
import DesignCard from "../components/shared/DesignCard";

import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";

const Home = () => {
    const cards = [
        {
            image: img1,
            date: { day: "30", month: "NOV" },
            title: "The Secrets of Fashion",
            description: "Don't call she Angel..."
        },
        {
            image: img2,
            date: { day: "25", month: "MAR" },
            title: "Betrayal to Strength",
            description: "Every broken piece creates new power..."
        },
        {
            image: img3,
            date: { day: "12", month: "JAN" },
            title: "Dark Elegance",
            description: "Luxury meets mystery..."
        }
    ];

    return (
        <div className="bg-black text-white">
            <FeaturedSlider />

            {/* CARD SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
                {cards.map((card, index) => (
                    <DesignCard key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default Home;