"use client";
import React from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundDown } from "react-icons/io";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative">
      {/* Background Image with Gradient */}
      <motion.div
        className="h-screen relative"
        initial={{ filter: "blur(10px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <img
          src="Augen.webp"
          alt="Augen heading"
          className="h-[90vh] md:h-screen object-contain md:object-cover "
        />
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-white to-transparent opacity-85"></div>
      </motion.div>

      {/* Discover More Section - Centered Properly */}
      <div className="md:flex items-center hidden rounded-xl absolute top-24 left-1/2 transform -translate-x-1/2 bg-gray-100 p-2 cursor-pointer group">
        <motion.p
          className="text-gray-500 font-thin text-[11px] px-8"
          initial={{ filter: "blur(0px)" }}
          whileHover={{
            filter: ["blur(0px)", "blur(4px)", "blur(0px)"],
            transition: { duration: 1, times: [0, 0.5, 1] }, // Control timings
          }}
        >
          Discover more about our latest updates
        </motion.p>

        {/* Arrow icon motion div */}
        <div className="border border-blue-400 px-1 rounded-xl overflow-hidden">
          <motion.div
            className="group-hover:translate-x-100"
            initial={{ x: 0 }}
            whileHover={{
              x: [0, 100, 0, -100, 0], // Moves right, then left, then back to 0
              transition: { duration: 1, times: [0, 2, 2, 1] },
            }}
          >
            <IoIosArrowRoundForward />
          </motion.div>
        </div>
      </div>

      {/* Enhancement of Human Experience Text */}
      <motion.div
        className="absolute bottom-[55%] md:bottom-[15%] left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-20 "
        initial={{ filter: "blur(10px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5, ease: "backInOut" }}
      >
        <p className="font-mono pb-2 text-center md:text-left">augen</p>
        <p className="text-2xl max-w-[13rem] font-light text-center md:text-left">
          Enhancement of human experience.
        </p>
        <div className="flex pt-4 gap-1">
          <p className="font-thin text-sm hidden md:block">Explore</p>
          <button className="text-blue-400 font-extralight border border-blue-400 px-3 text-sm rounded-2xl">
            A<sup>1</sup>Sense
          </button>
          <button className="text-blue-400 font-extralight border border-blue-400 px-3 text-sm rounded-2xl">
            B<sup>1</sup>Eye
          </button>
          <button className="text-blue-400 font-extralight border border-blue-400 px-3 text-sm rounded-2xl">
            A<sup>1</sup>Neuro
          </button>
        </div>
      </motion.div>

      {/* Arrow at Bottom */}
      <motion.div
        className="absolute hidden md:block bottom-8 left-20 bg-gray-100 px-1 py-3 rounded-2xl"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <IoIosArrowRoundDown />
      </motion.div>
    </div>
  );
}
