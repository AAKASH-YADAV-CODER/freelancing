import React from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const Corporates = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="w-full my-20 mt-40 md:my-20 place-items-center">
      <div className="justify-center items-center text-center text-xl flex gap-2">
        <FaPlay className="text-orange-500" />
        OUR PARTNERS
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        {/* First logo */}
        <motion.div
          variants={itemVariants}
          className="place-items-center w-full mt-16"
        >
          <motion.img
            whileHover={{ scale: 1.1, rotate: 5 }}
            src="/logos/microsoft.png"
            className="h-16 w-16 md:h-24 md:w-24 m-6"
          />
          <div className="h2 text-lg font-mono mt-20">PRESENTED BY</div>
          <div className="w-[90%] h-[1px] bg-black mt-2" />
        </motion.div>

        {/* Second logo */}
        <motion.div
          variants={itemVariants}
          className="place-items-center w-full mt-16"
        >
          <div className="div flex gap-5">
            <motion.img
              whileHover={{ scale: 1.1, rotate: 5 }}
              src="/logos/app-store.png"
              className="h-16 w-16 md:h-24 md:w-24 m-6"
            />
            <motion.img
              whileHover={{ scale: 1.1, rotate: 5 }}
              src="/logos/ibm.png"
              className="h-16 w-16 md:h-24 md:w-24 m-6"
            />
          </div>
          <div className="h2 text-lg font-mono mt-20">CO-PRESENTED BY</div>
          <div className="w-[90%] h-[1px] bg-black mt-2" />
        </motion.div>

        {/* Third logo */}
        <motion.div
          variants={itemVariants}
          className="place-items-center w-full mt-16"
        >
          <div className="div flex gap-5">
            <motion.img
              whileHover={{ scale: 1.1, rotate: 5 }}
              src="/logos/apple.png"
              className="h-16 w-16 md:h-24 md:w-24 m-6"
            />
            <motion.img
              whileHover={{ scale: 1.1, rotate: 5 }}
              src="/logos/nike.png"
              className="h-16 w-16 md:h-24 md:w-24 m-6"
            />
            <motion.img
              whileHover={{ scale: 1.1, rotate: 5 }}
              src="/logos/photos.png"
              className="h-16 w-16 md:h-24 md:w-24 m-6"
            />
          </div>
          <div className="h2 text-lg font-mono mt-20">POWERED BY</div>
          <div className="w-[90%] h-[1px] bg-black mt-2" />
        </motion.div>

        {/* Fourth logo */}
        <motion.div
          variants={itemVariants}
          className="place-items-center w-full mt-16"
        >
          <div className="div flex">
            <motion.img
              whileHover={{ scale: 1.1, rotate: 5 }}
              src="/logos/discord.png"
              className="h-16 w-16 md:h-24 md:w-24 m-6"
            />
            <motion.img
              whileHover={{ scale: 1.1, rotate: 5 }}
              src="/logos/pinterest.png"
              className="h-16 w-16 md:h-24 md:w-24 m-6"
            />
          </div>
          <div className="h2 text-lg font-mono mt-20">
            ASSOCIATE PARTNERS BY
          </div>
          <div className="w-[90%] h-[1px] bg-black mt-2" />
        </motion.div>

        {/* Fifth logo */}
        <motion.div
          variants={itemVariants}
          className="place-items-center w-full mt-16"
        >
          <div className="div flex gap-5">
            <motion.img
              whileHover={{ scale: 1.1, rotate: 5 }}
              src="/logos/facebook.png"
              className="h-16 w-16 md:h-24 md:w-24 m-6"
            />
            <motion.img
              whileHover={{ scale: 1.1, rotate: 5 }}
              src="/logos/youtube.png"
              className="h-16 w-16 md:h-24 md:w-24 m-6"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white rounded-xl p-3 mt-24"
      >
        BECOME A SPONSOR
        <span className="ml-2">→</span>
      </motion.button>
    </div>
  );
};

export default Corporates;
