const HeroVideo = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">

            <video
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover opacity-70"
            >
                <source src="" type="" />
                </video>

                *//Overlay*//
                <div className="absolute inset-0 bg-black/40"></div>

                *//Text*//
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="text-6xl font-serif tracking-wide">
                        Emotional Fashion
                    </h1>
                    <p className="mt-4 tracking-widest uppercase text-sm">
                        Design your feelings
                    </p>
                </div>
        </div>
    );
};

export default HeroVideo;