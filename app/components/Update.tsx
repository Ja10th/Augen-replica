"use client";
import { motion } from "framer-motion";
import React from "react";
import {  IoIosArrowRoundForward } from "react-icons/io";

const Update = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row max-w-4xl gap-36 py-28 pl-10 mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <p>2.0</p>
          <motion.div
          initial={{y:100, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{ delay: 1.2, duration:1.5, ease: 'easeInOut' }}
          >
            <h2 className="text-2xl">Putting People First</h2>
            <p className="text-gray-500 py-5 text-sm  font-extralight max-w-xs md:max-w-md">
              Through the use of wearable technology, we aim to enhance human
              capabilities and generate a positive impact on the world.
            </p>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 1.2, ease: "easeInOut" }}
              className="flex gap-6 py-5 items-center"
            >
             <div className="py-1 px-4 rounded-2xl border border-blue-400 mr-2">
                <IoIosArrowRoundForward className="text-blue-500" />
              </div>
              <p className="text-blue-500 text-sm font-light">Career Options</p>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <p>3.0</p>
          <motion.div
          initial={{y:100, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{ delay: 1.2, duration:1.5, ease: 'easeInOut' }} >
            <h2 className="text-2xl">Stay Updated</h2>
            <p className="text-gray-500 py-5 text-sm font-extralight max-w-xs md:max-w-md ">
              Stay updated with our latest technological innovations and
              advancements in research and development.
            </p>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 1.2, ease: "easeInOut" }}
              className="flex gap-6 py-5 items-center"
            >
             <div className="py-1 px-4 rounded-2xl border border-blue-400 mr-2">
                <IoIosArrowRoundForward className="text-blue-500" />
              </div>
              <p className="text-blue-500 text-sm font-light">Latest News</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Update;
