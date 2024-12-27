import React from "react";
import {
  FaGraduationCap,
  FaCogs,
  FaChartLine,
  FaFlask,
  FaPaintBrush,
  FaBullhorn,
} from "react-icons/fa";
import { motion } from "framer-motion";

const streams = [
  {
    name: "Engineering (All Disciplines)",
    icon: <FaCogs />,
    description: "Empowering future engineers across various disciplines.",
    color: "bg-blue-500",
  },
  {
    name: "Commerce & Finance",
    icon: <FaChartLine />,
    description: "Shaping financial leaders and commerce professionals.",
    color: "bg-yellow-500",
  },
  {
    name: "Science (Pure & Applied)",
    icon: <FaFlask />,
    description: "Fostering innovation in pure and applied sciences.",
    color: "bg-green-500",
  },
  {
    name: "Arts & Humanities",
    icon: <FaGraduationCap />,
    description: "Nurturing creativity and cultural understanding.",
    color: "bg-red-500",
  },
  {
    name: "Business Administration & Management",
    icon: <FaBullhorn />,
    description: "Developing leaders in business and management.",
    color: "bg-purple-500",
  },
  {
    name: "Media & Communication",
    icon: <FaPaintBrush />,
    description: "Driving impact through media and communication.",
    color: "bg-pink-500",
  },
];

const EducationCover = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Streams of Education Covered
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        EPIIC Horizons is open to graduates from 6 key streams:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl">
        {streams.map((stream, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`p-6 rounded-lg shadow-lg ${stream.color} text-white`}
          >
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">{stream.icon}</div>
              <h2 className="text-xl font-semibold">{stream.name}</h2>
              <p className="text-center mt-2 text-sm">{stream.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationCover;
