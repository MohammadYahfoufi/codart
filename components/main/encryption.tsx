'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { slideInFromTop } from '@/lib/motion';

export const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-3xl sm:text-[40px] font-medium text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 px-6"
        >
          Performance & security.
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="relative flex flex-col items-center group cursor-pointer w-auto h-auto">
          <div className="absolute inset-[-6rem] sm:inset-[-7rem] md:inset-[-8rem] rounded-full bg-gradient-to-br from-purple-500/40 via-cyan-400/30 to-purple-500/10 blur-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={60}
            height={60}
            className="w-12 h-12 sm:w-14 sm:h-14 translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={90}
            height={90}
            className="z-10 w-20 h-20 sm:w-24 sm:h-24"
          />
        </div>
      </div>

      <div className="absolute z-[20] bottom-[10px] px-4 sm:px-[5px]">
        <div className="text-base sm:text-lg md:text-[20px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 tracking-wide leading-relaxed max-w-[20rem] sm:max-w-none">
          Secure your data with end-to-end encryption.
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
