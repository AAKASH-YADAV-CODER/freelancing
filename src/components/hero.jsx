// import { CalendarIcon, ShoppingBagIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="top-[100px] z-0 relative px-4 py-20 w-full items-center justify-between text-center bg-black  text-white min-h-screen"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className=" mb-16 flex justify-between w-full"
      >
        {/* side left image */}
        <div className="relative w-1/5 md:1/4 left-9 -bottom-12 md:-bottom-64 rotate-[-15deg] opacity-50 z-0">
          <div className="bg-white p-1 shadow-xl">
            <img src="/images/aakash-b.png" alt="Conference moment" />
          </div>
        </div>
        {/* main image */}
        <div className="bg-black border-2 border-dashed border-yellow-500 w-64 md:w-1/3 z-10 rounded-lg  mb-8 inline-block">
          <img
            src="/images/aakash-g.png"
            alt="D2C Summit Logo Large"
            className="rounded-lg "
          />
        </div>
        {/* side right image */}
        <div className="relative w-1/5 md:1/4 right-9 rotate-[15deg] z-0  opacity-50">
          <div className="bg-white p-1 shadow-xl ">
            <img src="/images/aakash-b.png" alt="Conference moment" />
          </div>
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 50, opacity: 0 }} // Starts off slightly below the view and fully transparent
        animate={{ y: 0, opacity: 1 }} // Moves into position and becomes fully visible
        transition={{
          delay: 0.4, // Delays the animation by 0.4 seconds
          duration: 0.8, // Animation lasts 0.8 seconds
          ease: "easeOut", // Makes the animation ease out for smoothness
        }}
        className="text-4xl md:text-5xl font-bold m-3 z-50 font-mono"
      >
        EPIIC Horizons 2025:
        <br /> India’s Premier Virtual Job Fair
      </motion.h1>
      <motion.h2
        initial={{ y: 50, opacity: 0 }} // Starts off slightly below the view and fully transparent
        animate={{ y: 0, opacity: 1 }} // Moves into position and becomes fully visible
        transition={{
          delay: 0.4, // Delays the animation by 0.4 seconds
          duration: 0.8, // Animation lasts 0.8 seconds
          ease: "easeOut", // Makes the animation ease out for smoothness
        }}
        className="italic text-2xl md:text-3xl font-serif m-3"
      >
        Empowering Talent. Connecting Futures
      </motion.h2>
      <motion.div className="place-items-center space-y-5 text-sm z-0">
        <button className="bg-yellow-500/30 hover:bg-[#FFD700] hover:shadow-yellow-500 hover:shadow-2xl hover:text-black text-yellow-400 px-4 py-2 mt-12 rounded-full flex  gap-2">
          REGISTER NOW
        </button>
        <div className="text-lg">(Free Registration for Participants)</div>
      </motion.div>
    </motion.div>
  );
}
