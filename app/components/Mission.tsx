"use client";
import { motion } from "framer-motion";
import React from "react";

const Mission = () => {
  return (
    <div className="bg-[#161719] py-20 relative">
      <motion.div
        initial={{ filter: "blur(4px)", opacity: 0 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
        className="flex flex-col justify-center text-left max-w-xs pl-14 pt-6 mx-auto"
      >
        <p className="font-thin text-white">At Augen</p>
        <p className="font-extralight text-blue-500">We put Humans First</p>
      </motion.div>

      <div className="flex flex-col md:flex-row px-10 md:px-0 max-w-8xl mx-auto gap-60  py-20 justify-center">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
          className="hidden md:block"
        >
          <div>
            <p className="text-gray-400 font-thin text-sm">0.1</p>
            <p className="text-white text-sm">Our Mission</p>
          </div>
          <div className="py-10">
            <p className="text-gray-400 font-thin text-sm">0.2</p>
            <p className="text-white text-sm">Our Vision</p>
          </div>
          <div>
            <p className="text-gray-400 font-thin text-sm">0.3</p>
            <p className="text-white text-sm">Our Ambition</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
        >
          <p className="text-2xl font-light text-white">
            Enhancement of human experience
          </p>
          <hr className="mt-4 pb-10 border-gray-700" />
          <p className="text-2xl font-light text-gray-200">
            Be the future of next-gen computing technologies
          </p>
          <hr className="mt-4 pb-8 border-gray-700" />
          <p className="text-2xl font-light text-gray-400">
            Enhance everyday life
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Mission;
