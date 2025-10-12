import React from "react";
import bannerBg from "../assets/banner.jpeg";

const Banner = () => {
  return (
    <section
      className="relative h-[70vh] md:h-[70vh] lg:h-[75vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      {/* Overlay with warm tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#2e1c0f]/70 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 md:px-8 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-wide">
          Would you like a{" "}
          <span className="text-[#E3B577] drop-shadow-lg">
            Cup of Delicious Coffee?
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-[#f1e0c6] leading-relaxed mb-8 font-light">
          It’s coffee time – Sip & Savor – Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment — enjoy the beautiful
          moments and make them memorable.
        </p>

        <button className="btn border-none bg-[#E3B577] hover:bg-[#d8a85e] text-[#2e1c0f] font-semibold px-8 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Banner;
