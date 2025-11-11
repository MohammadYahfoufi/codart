'use client';

import { SparklesIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Image from 'next/image';

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/lib/motion';

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="relative flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[700px] w-auto h-auto leading-tight"
        >
          <span className="relative inline-block">
            <span className="absolute inset-0 blur-3xl opacity-60 bg-gradient-conic from-cyan-400 via-violet-500 via-rose-500 to-cyan-400 -z-10" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-violet-400 to-rose-300 drop-shadow-[0_0_30px_rgba(63,131,248,0.35)]">
              Delivering the best project experiences.
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-[18px] font-medium text-gray-300 my-5 max-w-[600px] tracking-wide"
        >
          We&apos;re a full-stack product team crafting modern web platforms,
          mobile experiences, and custom software that scale. Partner with us to
          build something extraordinary together.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row gap-4 mt-6"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-3 px-8 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg text-center cursor-pointer hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
          >
            Start a Project
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-3 px-8 border-2 border-[#7042f88b] text-white font-semibold rounded-lg text-center cursor-pointer hover:bg-[#7042f88b] transition-all duration-300"
          >
            See Our Work
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
