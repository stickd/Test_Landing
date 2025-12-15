"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Pricing() {
  const tiers = [
    {
      name: "NordWave Mini v2",
      price: "$249",
      features: [
        "Studio-quality audio",
        "Ultra portable",
        "Low-latency monitoring",
      ],
    },
    {
      name: "NordWave Mini Pro",
      price: "$349",
      features: [
        "All Mini v2 features",
        "High-gain preamps",
        "Extra connectivity options",
      ],
    },
    {
      name: "NordWave Mini Bundle",
      price: "$449",
      features: [
        "Pro features",
        "Includes soft-case & cables",
        "Premium support",
      ],
    },
  ];

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

      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 sm:gap-8 max-w-6xl mx-auto">
        {tiers.map((tier, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 sm:px-8 py-6 sm:py-8 rounded-2xl shadow-lg text-center flex flex-col justify-between transition-all duration-300 w-full sm:w-1/3"
          >
            <div>
              <h3 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">
                {tier.name}
              </h3>
              <p className="text-gray-300 text-sm sm:text-lg mb-4 sm:mb-6">
                {tier.price}
              </p>
              <ul className="text-gray-200 text-sm mb-4 space-y-1">
                {tier.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255,0,0,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 sm:px-8 sm:py-3 bg-red-500 hover:bg-red-600 rounded-xl font-semibold transition shadow-md w-full"
            >
              Buy Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
