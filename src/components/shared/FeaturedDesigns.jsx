import React from "react";
import design1 from "../../assets/images/design1.jpg";
import design2 from "../../assets/images/design2.jpg";
import design3 from "../../assets/images/design3.jpg";






const FeaturedDesigns = () => {

    return (

        <section className="bg-[#0a0a0a] text-white py-24 px-6">

            {/* TITLE */}
            <h2 className="text-center text-4xl md:text-5xl font-serif mb-16 
    bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 
    text-transparent bg-clip-text tracking-widest">
                Featured Designs
            </h2>

            {/* IMAGES */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                <img
                    src={design1}
                    className="w-full h-[420px] object-cover rounded-xl 
      transition duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                />

                <img
                    src={design2}
                    className="w-full h-[420px] object-cover rounded-xl 
      transition duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                />

                <img
                    src={design3}
                    className="w-full h-[420px] object-cover rounded-xl 
      transition duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                />

            </div>

            {/* TEXT */}
            <div className="text-center mt-20 max-w-2xl mx-auto">

                <h3 className="text-3xl mb-4 
      bg-gradient-to-r from-yellow-500 to-yellow-300 
      text-transparent bg-clip-text">
                    Design is Emotion
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                    Every piece tells a story — a moment, a feeling, a transformation.
                    Fashion is not just what you wear, it's who you become.
                </p>

                {/* BUTTON */}
                <button className="relative px-8 py-3 border border-yellow-600 text-yellow-400 
      tracking-widest uppercase overflow-hidden group">

                    <span className="relative z-10">Explore More</span>

                    <span className="absolute inset-0 bg-yellow-600 opacity-0 
        group-hover:opacity-20 transition duration-500"></span>
                </button>

            </div>

        </section>
    );
};
export default FeaturedDesigns;
