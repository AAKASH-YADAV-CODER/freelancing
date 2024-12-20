import { CalendarIcon, ShoppingBagIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="top-[104px] z-0 relative px-4 py-20 mx-auto w-full items-center justify-between text-center bg-gradient-to-b from-[#3D2319] to-black text-white min-h-screen"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className=" mb-16 flex justify-between"
      >
        {/* side left image */}
        <div className="relative w-1/5 md:1/4 left-9 -bottom-12 md:-bottom-64 rotate-[-15deg] opacity-50 z-0">
          <div className="bg-white p-1 shadow-xl">
            <img src="/images/aakash-b.png" alt="Conference moment" />
          </div>
        </div>
        {/* main image */}
        <div className="bg-black w-64 md:w-1/3 z-10 rounded-lg  mb-8 inline-block">
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
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-2xl md:text-6xl font-bold mb-12 z-20"
      >
        India's Premier D2C &<br />
        Modern Retail Conclave
      </motion.h1>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex items-center justify-center gap-4 text-sm z-0"
      >
        <span className="bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full flex items-center gap-2">
          <ShoppingBagIcon className="h-4 w-4" />
          ANNOUNCING SOON
        </span>
        <span className="bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full flex items-center gap-2">
          <CalendarIcon className="h-4 w-4" />
          SEPTEMBER 2025
        </span>
      </motion.div>
    </motion.div>
  );
}
