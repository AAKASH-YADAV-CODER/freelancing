import React from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const ParticipatingCompany = () => {
  return (
    <div className="w-full my-20 mt-40 md:my-20 place-items-center">
      <div className="justify-center items-center text-center text-xl flex gap-2">
        <FaPlay className="text-yellow-500" />
        PARTICIPATING COMPANIES
      </div>

      <div className="w-full">
        {/* First logo */}
        <div className="place-items-center w-full mt-16">
          <motion.img
            whileHover={{ scale: 1.1, rotate: 5 }}
            src="/logos/microsoft.png"
            className="h-16 w-16 md:h-24 md:w-24 m-6"
          />
          <div className="h2 text-lg font-mono mt-20"> Industry Partners</div>
          <div className="w-[90%] h-[1px] bg-black mt-2" />
        </div>

        {/* Second logo */}
        <div className="place-items-center w-full mt-16">
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
          <div className="h2 text-lg font-mono mt-20">Sponsors</div>
          <div className="w-[90%] h-[1px] bg-black mt-2" />
        </div>

        {/* Third logo */}
        <div className="place-items-center w-full mt-16">
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
        </div>

        {/* Fourth logo */}
        <div className="place-items-center w-full mt-16">
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
        </div>

        {/* Fifth logo */}
        <div className="place-items-center w-full mt-16">
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
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-[#FFD700] via-[#FFECB3] to-[#B8860B] text-black font-medium rounded-xl p-3 mt-10"
      >
        BECOME A SPONSOR
        <span className="ml-2">→</span>
      </motion.button>
    </div>
  );
};

export default ParticipatingCompany;
