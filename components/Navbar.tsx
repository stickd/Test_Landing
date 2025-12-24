"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  onScroll?: (id: string) => void;
}

export default function Navbar({ onScroll }: NavbarProps) {
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
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-0
                 bg-white/30 backdrop-blur-lg shadow-lg border-b border-white/20"
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20 z-[100]">
        <motion.div
          className="h-full bg-red-500 origin-left"
          style={{ scaleX: scrollProgress / 100 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        />
      </div>

      {/* Desktop navigation */}
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
              className={`group relative font-extrabold tracking-wide uppercase text-xl transition
                ${
                  isActive ? "text-red-500" : "text-black/80 hover:text-red-500"
                }`}
            >
              {label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-red-500 rounded-full group-hover:w-full transition-all duration-300" />
            </button>
          );
        })}
      </div>

      {/* Mobile — ТОЛЬКО логотип */}
      <div className="sm:hidden flex items-center justify-center relative z-10 h-12">
        <div className="text-black font-bold text-xl">NordWave</div>
      </div>
    </nav>
  );
}
