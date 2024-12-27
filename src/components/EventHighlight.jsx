import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaIndustry,
  FaGraduationCap,
  FaMapMarkedAlt,
  FaUsers,
} from "react-icons/fa";

const highlights = [
  {
    title: "50+ Companies Participating",
    description: "From startups to listed corporates.",
    icon: <FaBuilding />,
  },
  {
    title: "8 Industries Represented",
    description:
      "IT, Finance, Healthcare, Media, Retail, Manufacturing, Education, and Logistics.",
    icon: <FaIndustry />,
  },
  {
    title: "6 Education Streams",
    description: "Tailored roles for diverse academic disciplines.",
    icon: <FaGraduationCap />,
  },

  {
    title: "18 States & UT Reach",
    description: "Expanding the reach across regions.",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "Expected Reach of 2 Million Candidates",
    description: "Connecting talent Pan India.",
    icon: <FaUsers />,
  },
];

const EventHighlight = () => {
  return (
    <div className="relative bg-gray-900 text-white py-16 min-h-screen">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-50"></div>

        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
        >
          {/* Animation of connected nodes */}
          <circle
            cx="400"
            cy="300"
            r="200"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          <circle
            cx="400"
            cy="300"
            r="100"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <h1 className="text-center text-4xl font-bold mb-10 z-10 relative">
        Event Highlights
      </h1>
      <h2 className="text-center text-2xl font-bold mb-10 z-10 relative">
        Why This Event Stands Out
      </h2>
      <div className="overflow-x-hidden h-[500px]">
        <motion.div
          className="flex space-x-6 relative z-10  "
          animate={{
            x: ["0%", "-35%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="m-5 transform text-black bg-opacity-10 transition-transform hover:scale-110 flex-shrink-0 w-80 h-96  bg-gradient-to-br from-[#FFD700] to-[#B8860B] rounded-lg shadow-lg p-6 text-center relative z-10"
            >
              <div className="text-5xl m-4 place-items-center">
                {highlight.icon}
              </div>
              <h2 className="text-3xl font-semibold my-10">
                {highlight.title}
              </h2>
              <p className=" text-sm mt-5">{highlight.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EventHighlight;
