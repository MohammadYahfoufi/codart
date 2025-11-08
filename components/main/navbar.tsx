'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link href="#about-me" className="flex items-center">
          <Image
            src="/codart1.png"
            alt="Codart Logo"
            width={90}
            height={90}
            draggable={false}
            className="cursor-pointer"
          />
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[520px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-center gap-3 w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[18px] py-[6px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="relative flex items-center justify-center px-3.5 py-1.5 text-sm font-medium tracking-wide text-gray-200 cursor-pointer transition-colors duration-300 rounded-full overflow-hidden whitespace-nowrap group"
                onMouseEnter={() => setHoveredLink(link.title)}
                onMouseLeave={() => setHoveredLink(null)}
                onFocus={() => setHoveredLink(link.title)}
                onBlur={() => setHoveredLink(null)}
              >
                <AnimatePresence>
                  {hoveredLink === link.title && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-[2px] rounded-full bg-[radial-gradient(75%_150%_at_50%_-25%,rgba(255,255,255,0.35)_0%,rgba(112,66,248,0.55)_45%,rgba(21,162,255,0.65)_100%)] shadow-[0_0_20px_rgba(112,66,248,0.35)]"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    />
                  )}
                </AnimatePresence>
                <motion.span
                  className="relative z-10 px-3 py-2"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 500, damping: 28 }}
                >
                  {link.title}
                </motion.span>
              </Link>
            ))}
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <motion.button
          className="md:hidden text-white focus:outline-none relative w-8 h-8 flex flex-col justify-center items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="w-6 h-0.5 bg-white block absolute"
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 0 : -6,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white block absolute"
            animate={{
              opacity: isMobileMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white block absolute"
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? 0 : 6,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="absolute top-[65px] left-0 w-full bg-[#030014]/95 backdrop-blur-xl border-t border-[rgba(112,66,248,0.2)] p-5 flex flex-col items-center text-gray-300 md:hidden z-50"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ 
                duration: 0.4, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              {/* Links */}
              <motion.div 
                className="flex flex-col items-center gap-6 w-full"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
              >
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.title}
                    variants={{
                      hidden: { x: -50, opacity: 0 },
                      visible: { 
                        x: 0, 
                        opacity: 1,
                        transition: {
                          duration: 0.4,
                          ease: "easeOut"
                        }
                      }
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      x: 10,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.link}
                      className="cursor-pointer hover:text-[rgb(112,66,248)] transition-all duration-300 text-center text-lg font-medium py-2 px-4 rounded-lg hover:bg-[rgba(112,66,248,0.1)] w-full block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Divider */}
              <motion.div
                className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(112,66,248,0.5)] to-transparent my-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />

              {/* Social Icons */}
              <motion.div 
                className="flex justify-center gap-8"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.8
                    }
                  }
                }}
              >
                {SOCIALS.map(({ link, name, icon: Icon }, index) => (
                  <motion.div
                    key={name}
                    variants={{
                      hidden: { scale: 0, opacity: 0 },
                      visible: { 
                        scale: 1, 
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          ease: "backOut"
                        }
                      }
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="p-2 rounded-full hover:bg-[rgba(112,66,248,0.2)] transition-all duration-300"
                    >
                      <Icon className="h-8 w-8 text-white hover:text-[rgb(112,66,248)] transition-colors duration-300" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
