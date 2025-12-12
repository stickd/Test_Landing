"use client";
import React from "react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  text: string;
}

export default function TestimonialCard({ name, text }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{
        boxShadow: "0 0 20px rgba(255,255,255,0.5)",
        scale: 1.02,
        transition: { duration: 0.05 },
      }}
      className="p-4 sm:p-6 bg-white/5 rounded-2xl border border-white/10"
    >
      <p className="text-gray-300 text-sm sm:text-base mb-4">"{text}"</p>
      <h4 className="font-semibold text-sm sm:text-base">{name}</h4>
    </motion.div>
  );
}
