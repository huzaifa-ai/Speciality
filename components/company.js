"use client";
import { useState } from "react";
import Image from "next/image";
import LadyImage from "../assets/image.png";

const Speciality = ({ features }) => {
  const [selectedFeature, setSelectedFeature] = useState(
    features.length > 0
      ? { title: features[0].title, description: features[0].description }
      : { title: "Default Title", description: "Default description." }
  );

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <section className="py-12 bg-white text-center">
      <h3 className="text-sm uppercase text-gray-500 mb-3 mt-[600px]">
        Why Choose Us
      </h3>
      <h2 className="text-3xl font-bold mb-6">We Are Different From Others</h2>
      <p className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Ipsa cupiditate
        accusantium recusandae soluta explicabo hic! Facere unde nam accusantium
        natus?
      </p>

      <div className="flex justify-center items-center gap-8">
        {/* Left Section: Image and Text Overlay */}
        <div className="relative w-1/2">
          <div className="relative flex">
            <div className=" bg-red-600 opacity-70 relative left-14 text-white p-4 rounded-full w-72 h-72 flex flex-col items-center justify-center text-left">
              <h3 className="text-md font-bold mb-2">
                {selectedFeature.title}
              </h3>
              <p className="text-xs text-center">
                {selectedFeature.description}
              </p>
            </div>
            <div className="text-white p-4 rounded-full w-72 h-72 flex flex-col items-center justify-center text-left bg-gray-200">
              <Image
                src={LadyImage}
                alt={selectedFeature.title}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Right Section: List of Features */}
        <div className="w-1/2">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`flex items-center rounded-l-2xl font-bold ${
                  selectedFeature.title === feature.title
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <span
                  onClick={() => handleFeatureClick(feature)} // Change the feature on click
                  className="cursor-pointer px-3 py-2 rounded-full mr-4"
                >
                  &lt;
                </span>
                <span
                  onClick={() => handleFeatureClick(feature)} // Change the feature on click
                  className={`cursor-pointer text-lg ${
                    selectedFeature.title === feature.title ? "font-bold" : ""
                  }`}
                >
                  {feature.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Speciality;
