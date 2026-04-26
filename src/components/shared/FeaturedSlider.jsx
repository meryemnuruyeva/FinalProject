
import React, { useState } from "react";

const slides = [
    {
        id: 1,
        image: "",
        title: "Betrayal to Strength",
        subtitle: "Every broken piece creates new power",
    },
    {
        id: 2,
        image: "",
        title: "Confidence & Freedom",
        subtitle: "True beauty begins when you trust yourself",
    },
    {
        id: 3,
        image: "",
        title: "Reborn Again",
        subtitle: "From pain rises a brighter soul",
    },
];

const FeaturedSlider = () => {
    const [index, setIndex] = useState(0);

    return (
        <section className="w-full bg-black py-10">

            {/* SLIDER */}
            <div className="relative w-[90%] mx-auto h-[500px] overflow-hidden">

                <img src={slides[index].image} className="w-full h-full object-cover" />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                
                {/* text */}
                <div className="absolute bottom-10 left-10 text-yellow">
                    <h2 className="text-5xl font-bold mb-2">
                        {slides[index].title}
                    </h2>
                    <h3 className="text-3xl font-serif">
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
                        className={`w-3 h-3 rounded-full cursor-pointer ${i === index ? "bg-[#D4AF37]" : "bg-gray-500"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default FeaturedSlider;