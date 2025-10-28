"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-medium mt-[10px] text-center mb-[15px]"
      >
        Making apps with modern technologies.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[18px] font-medium text-gray-300 mb-10 mt-[10px] text-center tracking-wide"
      >
        Building scalable solutions with cutting-edge technologies.
      </motion.div>
    </div>
  );
};
