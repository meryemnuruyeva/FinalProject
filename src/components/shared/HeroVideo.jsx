import React from "react";
import videoFlie from "../../assets/images/"

const HeroVideo = () => {
    return (
        <section className="w-full bg-black py-16 flex justify-center">

            <div className="w-[85%] relative">

                {/* Video */}
                <video
                    src={videoFile}
                    controls
                    className="w-full h-[500px] object-cover"
                />

                {/* Üstündə yazı (optional) */}
                <div className="absolute top-10 left-10 bg-white px-6 py-4 shadow-lg">
                    <p className="text-sm text-gray-500">25 APR</p>
                    <h2 className="text-4xl font-serif">
                        The Right Tools <br /> for the Job
                    </h2>
                </div>

            </div>

        </section>
    );
};

export default HeroVideo;