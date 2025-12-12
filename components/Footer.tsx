"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white py-10 sm:py-12 px-4 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 -z-10"
        style={{ backgroundImage: "url('/footer-bg.jpg')" }}
      />
      <div className="max-w-xs sm:max-w-6xl mx-auto text-center text-gray-400 space-y-6 relative z-10">
        <p>&copy; 2025 NordWave. All rights reserved.</p>

        <form className="flex flex-col gap-2 sm:gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 sm:p-3 rounded-lg border border-gray-600 bg-black text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 sm:p-3 rounded-lg border border-gray-600 bg-black text-white"
          />
          <textarea
            placeholder="Message"
            className="p-2 sm:p-3 rounded-lg border border-gray-600 bg-black text-white"
          />
          <button className="px-4 sm:px-8 py-2 sm:py-3 bg-white text-black hover:bg-gray-200 rounded-xl font-semibold transition shadow-md hover:scale-105">
            Send
          </button>
        </form>

        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 text-sm sm:text-base">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
