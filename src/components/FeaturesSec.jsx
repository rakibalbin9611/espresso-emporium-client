import React from "react";
import aromaIcon from "../assets/icons/1.png";
import qualityIcon from "../assets/icons/2.png";
import gradeIcon from "../assets/icons/3.png";
import roastIcon from "../assets/icons/4.png";

const FeatureSection = () => {
  const features = [
    {
      id: 1,
      icon: aromaIcon,
      title: "Awesome Aroma",
      description:
        "You will definitely be a fan of the design & aroma of your coffee.",
    },
    {
      id: 2,
      icon: qualityIcon,
      title: "High Quality",
      description: "We serve the coffee to you maintaining the best quality.",
    },
    {
      id: 3,
      icon: gradeIcon,
      title: "Pure Grades",
      description:
        "Our coffee is made of the finest green coffee beans which you’ll love.",
    },
    {
      id: 4,
      icon: roastIcon,
      title: "Proper Roasting",
      description:
        "Your coffee is brewed by first roasting the finest green coffee beans.",
    },
  ];

  return (
    <section className="bg-[#f8f4ef] py-16 px-6 md:px-12 lg:px-36">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center justify-center space-y-4 text-[#2e1c0f]"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-14 h-14 object-contain mb-2"
            />
            <h3 className="text-xl font-semibold font-serif text-[#3d2615]">
              {feature.title}
            </h3>
            <p className="text-sm text-[#6b4e32] raleway leading-relaxed max-w-[220px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
