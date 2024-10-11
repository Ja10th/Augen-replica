"use client";
import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";

const Docs = () => {
  return (
    <div className="bg-blue-500">
      <div className="max-w-4xl flex flex-col  md:flex-row gap-20 py-28 mx-auto pl-10">
        <div className="flex">
          <motion.p
            initial={{ filter: "blur(4px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px", opacity: 1 }}
            transition={{ delay: 1.1, duration: 1.2, ease: "easeInOut" }}
            className="text-white"
          >
            1.0
          </motion.p>
        </div>
        <div>
          <motion.h1
            initial={{ filter: "blur(4px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px", opacity: 1 }}
            transition={{ delay: 1.1, duration: 1.2, ease: "easeInOut" }}
            className="text-3xl text-white"
          >
            Open Docs -— augen
          </motion.h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 1.2, ease: "easeInOut" }}
            className="text-gray-200 font-extralight max-w-[10rem] text-sm py-5"
          >
            Request access to get more info on Augen.
          </motion.p>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 1.2, ease: "easeInOut" }}
            className="flex gap-10 py-5 items-center"
          >
            <motion.div
              className=" border border-white px-1 py-3 rounded-2xl"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <IoIosArrowRoundDown className="text-white" />
            </motion.div>
            <p className="text-white text-lg">Company Documentation</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
