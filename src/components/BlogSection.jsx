import React from "react";

const BlogSection = () => {
    return (
        <div className="bg-black text-yellow py-16 px-10">

            <div className="grid md:grid-cols-3 gap-10">

                *//left side*//
                <div className="md:col-span-2 grid-cols-2 gap-10">

                    *//card*//
                    <div>
                        <div className="relative">
                            <img src="../assets/images/makeup.jpg" className="w-full h-[250px] object-cover" />
                            <div className="absolute top-3 left-3 bg-black text-yellow px-2 text-xs">
                                10 FEB
                            </div>
                        </div>

                        <h2 className="mt-4 text-xl font-serif">Batrayal</h2>
                        <p className="text-sm text-gray-500">
                            Internal breakdown and distrust
                        </p>

                        <button className="mt-3 border px-4 py-2 text-sm">
                            CONTINUE READING
                        </button>

                        <hr className="mt-6" />
                    </div>

                    *//card2*//
                    <div>
                        <div className="relative">
                            <img src="../assets/images/mask.webp" className="w-full h-[250px] object-cover" />
                            <div className="absolute top-3 left-3 bg-black text-yellow px-2 text-xs">
                                6 MAR
                            </div>
                        </div>

                        <h2 className="mt-4 text-xl font-serif">Power</h2>
                        <p className="text-sm text-gray-500">
                            Strength and authority
                        </p>

                        <button className="mt-3 border px-4 py-2 text-sm">
                            CONTINUE READING
                        </button>

                        <hr className="mt-6"/>
                    </div>

                    *//card3*//
                    <div>
                        <div className="relative">
                            <img src="../assets/images/fashion.webp" className="w-full h-[250px] object-cover" />
                            <div className="absolute top-3 left-3 bg-black text-yellow px-2 text-xs">
                                6 MAR
                            </div>
                        </div>

                        <h2 className="mt-4 text-xl font-serif">Power</h2>
                        <p className="text-sm text-gray-500">
                            Strength and authority
                        </p>

                        <button className="mt-3 border px-4 py-2 text-sm">
                            CONTINUE READING
                        </button>

                        <hr  className="mt-6" />
                    </div>

                    *//card4*//
                    <div>
                        <div className="relative">
                            <img src="../assets/images/black-gold.jpg" className="w-full h-[250px] object-cover" />
                            <div className="absolute top-3 left-3 bg-black text-yellow px-2 text-xs">
                                1 APR
                            </div>
                        </div>

                        <h2 className="mt-4 text-xl font-serif">Freedom</h2>
                        <p className="text-sm text-gray-500">
                            Liberty
                        </p>

                        <button className="mt-3 border px-4 py-2 text-sm">
                            CONTINUE READING
                        </button>

                        <hr  className="mt-6" />
                    </div>

                </div>
                *//right side*//
                <div>

                    *//about*//
                    <h3 className="font-serif text-lg mb-3">About Project</h3>
                    <hr className="mb-3" />
                    <p className="text-sm text-gray-600 mb-6">
                        Emotional Fashion - insan duygularini moda vasitesile ifade eden layehdir.
                    </p>

                    *//emotions*//
                    <h3 className="font-serif text-lg mb-3">Emotions</h3>
                    <hr className="mb-3" />
                    <ul className="text-sm space-y-2">
                        <li>Bateriyal</li>
                        <li>Power</li>
                        <li>Self-confidence</li>
                        <li>Freedom</li>
                        <li>Rebirth</li>
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default BlogSection;