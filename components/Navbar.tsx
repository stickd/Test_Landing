"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  onScroll: (id: string) => void;
}

export default function Navbar({ onScroll }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sections = ["home", "features", "pricing", "footer"];

  // Скролл-прогресс
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section: string) => {
    onScroll(section);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm z-50 py-4 px-4 sm:px-0">
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20 z-[100]">
        <motion.div
          className="h-full bg-red-500 origin-left"
          style={{ scaleX: scrollProgress / 100 }}
        />
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex max-w-6xl mx-auto justify-center gap-8 relative z-10">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => onScroll(section)}
            className="group relative font-extrabold tracking-wide uppercase text-xl text-white transition-colors hover:text-red-500"
          >
            {section === "footer"
              ? "Contact"
              : section.charAt(0).toUpperCase() + section.slice(1)}
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex justify-between items-center max-w-6xl mx-auto relative z-10">
        <div className="text-white font-bold text-xl">NordWave</div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="sm:hidden absolute top-full left-0 w-full bg-black/95 flex flex-col items-center gap-6 py-6 z-40"
        >
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleClick(section)}
              className="text-white text-lg font-semibold hover:text-red-500"
            >
              {section === "footer"
                ? "Contact"
                : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
