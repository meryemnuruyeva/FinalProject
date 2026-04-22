const FeaturedSlider = () => {
    return (
        <div className="w-full bg-white py-10 px-5">
            <div className="grid md:grid-cols-3 gap-5">

                *//card 1//*
                <div className="relaitve group overflow-hidden">
                    <img src="" alt="" />
                    <div className="absolute bottom-5 left-5 text-white">
                        <p className="text-sm">14 APR</p>
                        <h2 className="text-xl font-serif">
                            Sometimes emotiond don't speak... They are worn.
                        </h2>
                    </div>
                </div>
                *//card 2 //*
                <div className="relative group overflow-hidden">
                    <img src="" className="w-full h-[400px] object-cover group-hover:scale-105 transition"
                    />
                    <div className="absolute bottom-5 left-5 text-white">
                        <p className="text-sm">20 APR</p>
                        <h2 className="text-xl font-serif">
                            The First Step to Success
                        </h2>
                    </div>
                </div>
                *//card 3//*
                <div className="relative group overflow-hidden">
                    <img src="" className="w-full h-[400px] object-cover group-hover:scale-105 transition"
                     />
                     <div className="absolute bottom-5 left-5 text-white">
                        <p className="text-sm">25 APR</p>
                        <h2 className="text-xl font-serif">
                            From the darkness of betrayal, into the fire of power...
                        </h2>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedSlider;