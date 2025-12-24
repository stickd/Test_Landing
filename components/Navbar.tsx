"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  onScroll?: (id: string) => void;
}

export default function Navbar({ onScroll }: NavbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sections = ["home", "features", "pricing", "footer"];

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar — видна всегда, даже на мобильных */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/20 z-[100]">
        <motion.div
          className="h-full bg-red-500 origin-left"
          style={{ scaleX: scrollProgress / 100 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        />
      </div>

      {/* Desktop navigation — скрыта на мобильных */}
      <nav className="hidden sm:block fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-0 bg-white/30 backdrop-blur-lg shadow-lg border-b border-white/20">
        <div className="max-w-6xl mx-auto justify-center flex gap-8 relative z-10">
          {sections.map((section) => {
            const label =
              section === "footer"
                ? "Contact"
                : section.charAt(0).toUpperCase() + section.slice(1);

            return (
              <button
                key={section}
                onClick={() =>
                  document
                    .getElementById(section)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative font-extrabold tracking-wide uppercase text-xl text-black/80 hover:text-red-500 transition"
              >
                {label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-red-500 rounded-full group-hover:w-full transition-all duration-300" />
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
