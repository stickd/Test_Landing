"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Testimonials from "../../components/Testimonials";
import Pricing from "../../components/Pricing";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -80; // высота navbar
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-black text-white relative">
      <Navbar onScroll={scrollTo} />
      <Hero onScroll={scrollTo} />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
