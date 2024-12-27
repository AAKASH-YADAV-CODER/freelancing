import React from "react";
// import { Button } from '@/components/ui/button'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
  // bg-[#3D2319]
  return (
    <motion.div className="bg-black w-full z-50 fixed top-0 left-0  mx-auto px-4 flex items-center justify-between">
      <div className="flex items-center  z-50 ml-10">
        <Link to={"/"} className="flex items-center gap-2">
          <img
            src="/EPIICW.png"
            alt="epiicLogo"
            width={110}
            height={100}
            className=""
          />
        </Link>
      </div>

      <button className="hidden md:block bg-gradient-to-r font-mono font-semibold from-[#FFD700] via-[#FFECB3] to-[#B8860B] text-black rounded-xl p-4 z-50">
        <pre>
          JOIN THE WAITLIST <span className="ml-2">→</span>
        </pre>
      </button>
    </motion.div>
  );
};

export default Navbar;
// from-[#FFD700] via-[#FFECB3] to-[#B8860B]
