"use client";
import React, { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (scrollY < 200) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-6 bottom-6 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition hidden sm:flex"
    >
      ↑
    </button>
  );
}
