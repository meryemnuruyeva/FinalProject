import React, { useState, useEffect } from "react";

import img1 from "../../assets/images/slide4.jpeg";
import img2 from "../../assets/images/slider21.jpg";
import img3 from "../../assets/images/slider22.jpg";

const slides = [
    {
        id: 1,
        image: img1,
        title: "Betrayal to Strength",
        subtitle: "Every broken piece creates new power",
    },
    {
        id: 2,
        image: img2,
        title: "Confidence & Freedom",
        subtitle: "True beauty begins when you trust yourself",
    },
    {
        id: 3,
        image: img3,
        title: "Reborn Again",
        subtitle: "From pain rises a brighter soul",
    },
];

const FeaturedSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full bg-black py-10">

            <div className="relative w-[90%] mx-auto h-[500px] overflow-hidden">

                {/* IMAGES */}
                {slides.map((slide, i) => (
                    <img
                        key={slide.id}
                        src={slide.image}
                        className={`absolute w-full h-full object-cover transition-all duration-[4000ms]
                        ${i === index ? "opacity-100 scale-110 z-10" : "opacity-0 scale-100 z-0"}`}
                    />
                ))}

                {/* overlay */}
                <div className="absolute inset-0 bg-black/40 z-20"></div>

                {/* TEXT (LUXURY SILVER) */}
                <div className="absolute bottom-10 left-10 z-30">

                    <h2 className="text-5xl font-bold mb-2 tracking-wide
                    bg-gradient-to-r from-[#C0C0C0] via-[#FFFFFF] to-[#A9A9A9]
                    bg-clip-text text-transparent
                    drop-shadow-[0_0_12px_rgba(200,200,255,0.6)]">
                        {slides[index].title}
                    </h2>

                    <h3 className="text-2xl font-serif tracking-wide
                    bg-gradient-to-r from-[#E0E0E0] to-[#C0C0C0]
                    bg-clip-text text-transparent
                    drop-shadow-[0_0_8px_rgba(200,200,255,0.5)]">
                        {slides[index].subtitle}
                    </h3>

                </div>

            </div>

            {/* dots */}
            <div className="flex justify-center mt-4 gap-2">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all
                        ${i === index ? "bg-white scale-125" : "bg-gray-500"}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default FeaturedSlider;