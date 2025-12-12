"use client";
import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex R.",
      text: "Best mini interface for mobile recording — sounds incredible!",
    },
    {
      name: "Maria L.",
      text: "Perfect for beatmakers, ultra portable and high quality.",
    },
    { name: "John D.", text: "Small device, huge sound. I love it!" },
  ];

  return (
    <motion.section
      className="bg-black text-white py-10 sm:py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-14">
        What People Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} name={t.name} text={t.text} />
        ))}
      </div>
    </motion.section>
  );
}
