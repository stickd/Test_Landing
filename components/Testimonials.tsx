"use client";
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Alex R.",
    text: "Best mini interface for mobile recording — sounds incredible!",
    avatar: "/avatars/2.jpg",
  },
  {
    name: "Maria L.",
    text: "Perfect for beatmakers, ultra portable and high quality.",
    avatar: "/avatars/4.jpg",
  },
  {
    name: "John D.",
    text: "Small device, huge sound. I love it!",
    avatar: "/avatars/3.jpeg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  return (
    <motion.section
      className="bg-black text-white py-10 sm:py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      aria-labelledby="testimonials-title"
    >
      <h2
        id="testimonials-title"
        className="text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-14"
      >
        What People Say
      </h2>

      <div className="max-w-3xl mx-auto relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative bg-black/50 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center shadow-lg"
            aria-live="polite"
          >
            <img
              src={testimonials[index].avatar}
              alt={testimonials[index].name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mb-4 object-cover border-2 border-red-500"
              loading="lazy"
            />

            <TestimonialCard
              name={testimonials[index].name}
              text={testimonials[index].text}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
          <button
            type="button"
            onClick={handlePrev}
            className="text-white text-3xl p-2 hover:text-red-500 transition-colors"
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="text-white text-3xl p-2 hover:text-red-500 transition-colors"
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      </div>
    </motion.section>
  );
}
