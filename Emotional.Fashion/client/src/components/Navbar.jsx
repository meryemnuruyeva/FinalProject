

const Navbar = () => {
    return (
        <div className="bg-white text-black">

            //*Logo//*
            <div className="relative text-center py-20 bg-[url('src/assets/images/gold.jpg')] bg-cover bg-center">

                  //*Overlay//*
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10 text-white">
                    <h1 className="text-5xl font-serif tracking-widest">Renaissance </h1>
                    <p className="text-sm tracking-wide">
                        Wear your emotions
                    </p>
                </div>
            </div>

            //*Menu//*
            <div className="flex justify-center gap-10 py-3 text-sm tracking-widest bg-black text-[#D4AF37] border-t border-b border-gray-700">
               <a href="#" className="hover:text-[#FFD700] transition duration-300">HOME</a>
                <a href="#" className="hover:text-[#FFD700] transition duration-300">FEATURES</a>
                <a href="#" className="hover:text-[#FFD700] transition duration-300">POST TYPES</a>
                <a href="#" className="hover:text-[#FFD700] transition duration-300">PAGES</a>
                <a href="#" className="hover:text-[#FFD700] transition duration-300">CATEGORIES</a>
            </div>

            
        </div>
    );
};

export default Navbar;
