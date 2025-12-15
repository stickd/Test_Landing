"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  onScroll: (id: string) => void;
}

const title = "Professional Sound. Minimal Size.";

export default function Hero({ onScroll }: HeroProps) {
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 400], [0, 120]);
  const fogY = useTransform(scrollY, [0, 400], [0, 200]);
  const lightY = useTransform(scrollY, [0, 400], [0, 80]);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden px-4"
    >
      {/* ===== PARALLAX LAYERS ===== */}

      {/* Background */}
      <motion.div
        initial={false}
        style={{ y: bgY, backgroundImage: "url('/1.png')" }}
        className="absolute inset-0 bg-cover bg-center z-0"
      />

      {/* Fog */}
      <motion.div
        initial={false}
        style={{ y: fogY }}
        className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_65%,rgba(255,255,255,0.08),transparent_70%)]"
      />

      {/* Light */}
      <motion.div
        initial={false}
        style={{ y: lightY }}
        className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_40%,rgba(255,0,0,0.15),transparent_60%)]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 z-[3]" />

      {/* ===== CONTENT ===== */}
      <motion.div
        className="relative z-10 max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
      >
        {/* Title – stagger letters */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 flex flex-wrap justify-center">
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 20, rotate: -5 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  transition: { ease: "easeOut", duration: 0.5 },
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="text-gray-300 text-base sm:text-xl mb-10"
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          The new NordWave Mini Interface v2 — studio quality audio wherever you
          go.
        </motion.p>

        {/* ===== CTA ===== */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          {/* Buy Now */}
          <motion.button
            onClick={() => onScroll("pricing")}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(255,0,0,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-red-500 to-red-600 overflow-hidden"
          >
            <span className="relative z-10">Buy Now</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-500 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Learn More – glass */}
          <motion.button
            onClick={() => onScroll("features")}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 30px rgba(255,255,255,0.25)",
            }}
            whileTap={{ scale: 0.96 }}
            className="relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden border border-white/30 bg-white/10 backdrop-blur-md"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%]"
              whileHover={{ translateX: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <span className="absolute inset-0 rounded-xl shadow-inner shadow-white/10" />
            <span className="relative z-10">Learn More</span>
          </motion.button>
        </div>
      </motion.div>

      {/* ===== SCROLL ARROW ===== */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="text-xs text-gray-300"
        >
          Scroll down
        </motion.span>

        <motion.button
          onClick={() => onScroll("features")}
          whileHover={{
            scale: 1.2,
            textShadow: "0 0 15px rgba(255,255,255,0.8)",
          }}
          className="text-white text-3xl"
        >
          ↓
        </motion.button>
      </motion.div>
    </section>
  );
}
