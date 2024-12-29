import React from "react";
import { motion } from "framer-motion";
const stats = [
  {
    icon: "🏢", // Replace with a building icon
    title: "50+ Corporates",
    subtitle: "Participating Companies",
  },
  {
    icon: "🗺️", // Replace with a map icon
    title: "18 States & UT",
    subtitle: "Event Reach",
  },
  {
    icon: "👥", // Replace with a people icon
    title: "2 Million Candidates",
    subtitle: "Expected Reach",
  },
  {
    icon: "🏭", // Replace with an industry icon
    title: "8 Industries",
    subtitle: "Event Coverage",
  },
  {
    icon: "📚", // Replace with a streams icon
    title: "6 Streams",
    subtitle: "Event Coverage",
  },
];

const EventStats = () => {
  return (
    <section className="w-full min-h-screen bg-bannerImg bg-cover bg-no-repeat place-items-center gap-8">
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="w-[95%] mt-9  text-white place-items-center p-10"
      >
        <h1 className="text-2xl m-8">Event Stats at a Glance</h1>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#FFD700] to-[#B8860B] text-black rounded-lg p-6 shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-6xl mb-4">{stat.icon}</div>
              <h3 className="text-xl font-bold">{stat.title}</h3>
              <p className="text-sm">{stat.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EventStats;
