"use client";

import React from "react";
import { motion } from "framer-motion";

const GradientButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-8 py-3 rounded-xl font-semibold text-white overflow-hidden shadow-lg transition-all duration-300 bg-red-600"
    >
      <span className="relative z-10">{text}</span>

      {/* Градиентная анимация */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        whileTap={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          background: "linear-gradient(90deg, #7f00ff, #e100ff)",
        }}
      />
    </motion.button>
  );
};

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
      featured: true,
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
    <section
      id="pricing"
      className="py-20 px-4"
      style={{
        background: `linear-gradient(
          to bottom,
          #000000 0%,    /* черный сверху */
          #4b5563 50%,   /* средний серый */
          #9ca3af 100%   /* светло-серый внизу */
        )`,
      }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-white">
        Get Your NordWave Mini
      </h2>

      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
        Studio-quality audio interface in a compact size. Perfect for mobile
        recording and home studios.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-8 max-w-6xl mx-auto">
        {tiers.map((tier, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: tier.featured ? 1.05 : 1.03 }}
            transition={{ duration: 0.3 }}
            className={`relative rounded-2xl p-8 flex flex-col justify-between text-center w-full sm:w-1/3
              ${
                tier.featured
                  ? "bg-white shadow-2xl border-2 border-red-400"
                  : "bg-white shadow-lg"
              }`}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-1 text-xs font-bold rounded-full shadow-md">
                MOST POPULAR
              </span>
            )}

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-black">
                {tier.name}
              </h3>
              <p className="text-lg mb-6 opacity-80 text-black">{tier.price}</p>

              <ul className="text-sm space-y-2 mb-6 text-black">
                {tier.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>
            </div>

            <GradientButton text="Buy Now" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
