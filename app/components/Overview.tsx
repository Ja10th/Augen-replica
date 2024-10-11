"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

const sentences = [
  "to enhance everyday life.",
  "to improve people's life.",
  "to make tech easier.",
];

const sentenceVariants = {
  hidden: { opacity: 0, filter: "blur(4px)" }, // Start off blurred and moved down slightly
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: { opacity: 0, filter: "blur(4px)", transition: { duration: 1 } },
};

const Overview = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentenceIndex(
        (prevIndex) => (prevIndex + 1) % sentences.length
      );
    }, 2000); // Change sentence every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 py-32">
      <div className="max-w-8xl flex mx-auto gap-60 py-20 justify-center">
        <motion.div
          initial={{ filter: "blur(4px)", opacity: 0 }}
          whileInView={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
        >
          <p className="font-thin text-sm">Overview</p>
          <p className="text-sm">What&apos;s Augen </p>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
          className="max-w-lg"
        >
          <p className="text-2xl font-light">
            Augen is the first-of-its-kind AI Wearable Company bringing
            general-purpose devices
          </p>
          <div className="text-blue-500 text-2xl font-light">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSentenceIndex} // Use the sentence index as the key to trigger re-renders
                variants={sentenceVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {sentences[currentSentenceIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-5 pt-20">
            <motion.div
              className="group-hover:translate-x-100 text-blue-500 border border-blue-500 border-2xl px-2 rounded-2xl "
              initial={{ x: 0 }}
              whileHover={{
                x: [0, 100, 0, -100, 0], // Moves right, then left, then back to 0
                transition: { duration: 1, times: [0, 2, 2, 1] },
              }}
            >
              <IoIosArrowRoundForward />
            </motion.div>
            <p className="text-blue-500 font-light">Join our community</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;
