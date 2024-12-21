import React from "react";
// import { Button } from '@/components/ui/button'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
  // bg-[#3D2319]
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className="bg-black w-full z-50 fixed top-0 left-0  mx-auto px-4 py-6 flex items-center justify-between"
    >
      <div className="flex items-center gap-8 z-50">
        <Link to={"/"} className="flex items-center gap-2">
          <img
            src="/logos/youtube.png"
            alt="Inc42 Logo"
            width={50}
            height={30}
            className="object-contain"
          />
        </Link>
        <img
          src="/logos/discord.png"
          alt="img"
          width={40}
          height={40}
          className="rounded-xl"
        />
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm">
        {/* <Link href="#about" className="hover:text-orange-400">ABOUT</Link>
        <Link href="#why-attend" className="hover:text-orange-400">WHY ATTEND</Link>
        <Link href="#past-speakers" className="hover:text-orange-400">PAST SPEAKERS</Link>
        <Link href="#past-agenda" className="hover:text-orange-400">PAST AGENDA</Link>
        <Link href="#past-sponsors" className="hover:text-orange-400">PAST SPONSORS</Link>
        <Link href="#contact-us" className="hover:text-orange-400">CONTACT US</Link>
        <Link href="#faqs" className="hover:text-orange-400">FAQs</Link> */}
      </div>

      <button className="bg-gradient-to-r font-mono font-semibold from-yellow-400 via-yellow-200 to-yellow-600 text-black rounded-xl p-4 z-50">
        JOIN THE WAITLIST
        <span className="ml-2">→</span>
      </button>
    </motion.div>
  );
};

export default Navbar;
