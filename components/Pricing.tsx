"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <motion.section
      id="pricing"
      className="bg-white text-black py-10 sm:py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-12">
        Get Your NordWave Mini
      </h2>
      <p className="text-center text-sm sm:text-lg text-gray-700 max-w-xs sm:max-w-2xl mx-auto mb-8 sm:mb-12">
        Studio-quality audio interface in a compact size. Perfect for mobile
        recording and home studios.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-6 sm:px-12 py-6 sm:py-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] w-full sm:w-auto"
        >
          <h3 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">
            NordWave Mini v2
          </h3>
          <p className="text-gray-300 text-sm sm:text-lg mb-4 sm:mb-6">$249</p>
          <button className="px-6 py-2 sm:px-8 sm:py-3 bg-red-500 hover:bg-red-600 rounded-xl font-semibold transition shadow-md hover:scale-105 w-full sm:w-auto">
            Buy Now
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
