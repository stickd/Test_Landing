"use client";
import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  text: string;
}

export default function FeatureCard({ title, text }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        boxShadow: "0 0 20px rgba(255,255,255,0.5)",
        scale: 1.02,
        transition: { duration: 0.05 },
      }}
      className="p-4 sm:p-6 bg-white/5 rounded-2xl border border-white/10"
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm sm:text-base">{text}</p>
    </motion.div>
  );
}
