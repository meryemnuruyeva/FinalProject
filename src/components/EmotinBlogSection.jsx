import emotions from "../data/emotions";

const EmotionBlogSection = () => {
  return (
    <div className="bg-white text-black py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* LEFT SIDE (POSTS) */}
        <div className="md:col-span-2 grid md:grid-cols-2 gap-10">
          {emotions.map((item) => (
            <div key={item.id} className="border-b pb-6">

              {/* IMAGE */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[250px] object-cover grayscale hover:grayscale-0 transition duration-500"
                />

                {/* DATE */}
                <div className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1">
                  {item.date}
                </div>
              </div>

              {/* TITLE */}
              <h2 className="text-2xl font-serif mt-4">
                {item.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 mt-2">
                {item.description}
              </p>

              {/* BUTTON */}
              <button className="mt-4 border px-4 py-2 text-sm hover:bg-black hover:text-white transition">
                CONTINUE READING
              </button>

            </div>
          ))}
        </div>

        {/* RIGHT SIDE (SIDEBAR) */}
        <div className="space-y-10">

          {/* ABOUT */}
          <div>
            <h3 className="font-serif text-lg border-b pb-2">
              About Project
            </h3>
            <p className="text-sm text-gray-600 mt-3">
              Emotional Fashion — insan duyğularını moda vasitəsilə ifadə edən layihədir.
            </p>
          </div>

          {/* EMOTIONS LIST */}
          <div>
            <h3 className="font-serif text-lg border-b pb-2">
              Emotions
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Xəyanət</li>
              <li>Güc</li>
              <li>Özünəinam</li>
              <li>Azadlıq</li>
              <li>Yenidən doğuluş</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default EmotionBlogSection;