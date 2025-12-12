"use client";
import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

export default function Features() {
  const features = [
    {
      title: "Low-Latency Monitoring",
      text: "Record with zero delay — ideal for vocals, guitars, and beatmakers.",
    },
    {
      title: "High-Gain Preamps",
      text: "Clean, powerful amplification for any microphone.",
    },
    {
      title: "Ultra Portable",
      text: "Small body, premium components — take your studio anywhere.",
    },
    {
      title: "Cross-Platform Support",
      text: "Works with Mac, Windows, iPhone and iPad.",
    },
  ];

  return (
    <motion.section
      id="features"
      className="bg-black text-white py-10 sm:py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-14 px-2">
        Why NordWave Mini?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-6xl mx-auto px-2">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} text={feature.text} />
        ))}
      </div>
    </motion.section>
  );
}
