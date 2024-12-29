import React from "react";
import { useInView } from "react-intersection-observer";
import { FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const timelineData = [
  {
    phase: "Registration Opens",
    date: "1st February 2025",
    icon: <FaCalendarAlt className="text-blue-500" />,
  },
  {
    phase: "Registration Closes",
    date: "28th February 2025",
    icon: <FaCheckCircle className="text-green-500" />,
  },
  {
    phase: "Results & Follow-Ups",
    date: "March & April 2025",
    icon: <FaCalendarAlt className="text-purple-500" />,
  },
];

const TentaiveTimeline = () => {
  return (
    <div className="flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl font-bold mb-8">Tentative Timeline</h2>
      <h3 className="text-xl mb-6">Mark Your Calendar</h3>
      <div className="relative w-full max-w-md">
        {/* Glowing Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 animate-pulse"></div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ phase, date, icon }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`relative flex items-center mb-8 last:mb-0 transition-all duration-500 ease-in-out transform ${
        inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-10 h-10 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10">
        {icon}
      </div>

      {/* Connecting Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-5 bottom-5 w-1 bg-blue-500"></div>

      {/* Text Content */}
      <div className="ml-6 bg-white rounded-lg shadow-md p-4">
        <h4 className="font-bold text-lg">{phase}</h4>
        <p className="text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default TentaiveTimeline;
