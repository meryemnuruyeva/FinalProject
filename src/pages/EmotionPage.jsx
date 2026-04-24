import React from "react";

// images import
import fashionImg from "../assets/images/fashion.webp";
import makeupImg from "../assets/images/makeup.jpg";
import maskImg from "../assets/images/mask.webp";

const EmotionPage = () => {
    return (
        <div className="bg-black text-yellow-100 min-h-screen px-4 py-10 flex justify-center">

            <div className="max-w-md w-full">

                {/* DATE + TITLE */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="border border-yellow-500 px-3 py-2 text-center text-sm">
                        <p className="text-lg font-bold">3</p>
                        <p className="text-xs">DEC</p>
                    </div>

                    <div>
                        <h1 className="text-2xl font-serif leading-tight">
                            Spirit of <span className="italic">Adventure Rises</span>
                        </h1>

                        <p className="text-xs text-gray-400 mt-1">
                            BY SUSANNA ROBERTS · FASHION
                        </p>
                    </div>
                </div>

                {/* SHARE */}
                <p className="text-xs text-gray-500 mb-4 tracking-widest">
                    · SHARE
                </p>

                {/* IMAGE GRID */}
                <div className="grid grid-cols-2 gap-2 mb-6">

                    <img
                        src={fashionImg}
                        alt="fashion"
                        className="w-full h-[150px] object-cover row-span-2 hover:scale-105 transition duration-300"
                    />

                    <img
                        src={makeupImg}
                        alt="makeup"
                        className="w-full h-[150px] object-cover row-span-2 hover:scale-105 transition duration-300"
                    />

                    <img
                        src={maskImg}
                        alt="mask"
                        className="w-full h-[150px] object-cover col-span-2 hover:scale-105 transition duration-300"
                    />

                </div>

                {/* TEXT */}
                <div className="text-gray-300 text-sm leading-6">

                    <p className="mb-4">
                        <span className="text-4xl font-serif float-left mr-2 text-yellow-200">
                            P
                        </span>
                        roin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                        lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                        sem nibh id elit.
                    </p>

                    <p>
                        Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                        Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.
                    </p>

                </div>

            </div>
        </div>
    );
};

export default EmotionPage;