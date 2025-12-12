"use client";
import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  onScroll: (id: string) => void;
}

export default function Hero({ onScroll }: HeroProps) {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden px-4 sm:px-6"
    >
      {/* Background image + overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/1.png')" }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Hero content */}
      <motion.div
        className="relative z-20 max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Professional Sound. Minimal Size.
        </motion.h1>

        <motion.p
          className="text-sm sm:text-lg md:text-2xl text-gray-300 mb-6 sm:mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          The new NordWave Mini Interface v2 — studio quality audio wherever you
          go.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <motion.button
            onClick={() => onScroll("pricing")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 sm:px-8 sm:py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 w-full sm:w-auto"
          >
            Buy Now
          </motion.button>
          <motion.button
            onClick={() => onScroll("features")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 sm:px-8 sm:py-4 border border-white text-white rounded-xl hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll down arrow */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <button
          onClick={() => onScroll("features")}
          className="text-white text-3xl animate-bounce"
          aria-label="Scroll to Features"
        >
          ↓
        </button>
      </motion.div>
    </section>
  );
}
