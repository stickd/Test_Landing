"use client";
import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const icons = [
  // Наушники для Low-Latency Monitoring
  <svg
    className="w-10 h-10 text-red-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 1C6.48 1 2 5.48 2 11v4a2 2 0 002 2h1v-6H4v-1c0-3.31 2.69-6 6-6s6 2.69 6 6v1h-1v6h1a2 2 0 002-2v-4c0-5.52-4.48-10-10-10z"
    />
  </svg>,

  // Волна для High-Gain Preamps
  <svg
    className="w-10 h-10 text-red-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 12c2-4 4 4 6 0s4 4 6 0 4 4 6 0 4 4 6 0"
    />
  </svg>,

  // Портфель для Ultra Portable (новый)
  <svg
    className="w-10 h-10 text-red-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 7h18v12H3V7zm2 0v-2a2 2 0 012-2h10a2 2 0 012 2v2M8 7v2m8-2v2"
    />
  </svg>,

  // Кросс-платформа (устройство/окно) для Cross-Platform Support
  <svg
    className="w-10 h-10 text-red-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 4h18v16H3V4zm3 3h12v10H6V7z"
    />
  </svg>,
];

export default function Features() {
  const features = [
    {
      title: "Low-Latency Monitoring",
      text: "Record with zero delay — ideal for vocals, guitars, and beatmakers.",
      icon: icons[0],
    },
    {
      title: "High-Gain Preamps",
      text: "Clean, powerful amplification — perfect for any microphone or instrument.",
      icon: icons[1],
    },
    {
      title: "Ultra Portable",
      text: "Small body, premium components — take your studio anywhere.",
      icon: icons[2],
    },
    {
      title: "Cross-Platform Support",
      text: "Works seamlessly with Mac, Windows, iPhone and iPad.",
      icon: icons[3],
    },
  ];

  return (
    <motion.section
      id="features"
      className="bg-gradient-to-b from-black via-gray-900/80 to-black text-white py-10 sm:py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-14 px-2">
        Why NordWave Mini?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto px-2 auto-rows-fr">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              rotateX: 2,
              rotateY: 2,
              boxShadow: "0 0 30px rgba(255,255,255,0.15)",
            }}
            className="relative rounded-xl bg-black/20 p-6 text-center shadow-lg transition-all duration-300 flex flex-col h-full"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <FeatureCard
              title={feature.title}
              text={feature.text}
              className="mt-auto"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
