"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onScroll?: (id: string) => void;
}

export default function Navbar({ onScroll }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const sections = ["home", "features", "pricing", "footer"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);

      let current = "home";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && scrollTop >= el.offsetTop - window.innerHeight / 2) {
          current = section;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-0
                 bg-white/30 backdrop-blur-lg shadow-lg border-b border-white/20 transition-colors duration-500"
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20 z-[100]">
        <motion.div
          className="h-full bg-red-500 origin-left"
          style={{ scaleX: scrollProgress / 100 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        />
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex max-w-6xl mx-auto justify-center gap-8 relative z-10">
        {sections.map((section) => {
          const label =
            section === "footer"
              ? "Contact"
              : section.charAt(0).toUpperCase() + section.slice(1);
          const isActive = activeSection === section;

          return (
            <button
              key={section}
              onClick={() => handleClick(section)}
              className={`group relative font-extrabold tracking-wide uppercase text-xl transition-all duration-300
                ${
                  isActive ? "text-red-500" : "text-black/80 hover:text-red-500"
                }`}
            >
              {label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-red-500 rounded-full group-hover:w-full transition-all duration-300"></span>
            </button>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex justify-between items-center max-w-6xl mx-auto relative z-10">
        <div className="text-black font-bold text-xl">NordWave</div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black text-3xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="sm:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 z-40 rounded-b-lg shadow-lg"
          >
            {sections.map((section) => {
              const label =
                section === "footer"
                  ? "Contact"
                  : section.charAt(0).toUpperCase() + section.slice(1);
              const isActive = activeSection === section;

              return (
                <button
                  key={section}
                  onClick={() => handleClick(section)}
                  className={`text-lg font-semibold transition-all duration-300
                    ${
                      isActive
                        ? "text-red-500"
                        : "text-black/70 hover:text-red-500"
                    }`}
                >
                  {label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
