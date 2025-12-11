"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [footerInView, setFooterInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const footer = document.getElementById("footer");
    const observer = new IntersectionObserver(
      ([entry]) => setFooterInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (footer) observer.observe(footer);
    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // высота navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white relative">
      {/* FIXED NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm z-50 py-4">
        <div className="max-w-6xl mx-auto flex justify-center gap-8">
          {["home", "features", "pricing", "footer"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="group relative font-extrabold tracking-wide uppercase text-lg md:text-xl drop-shadow-md text-white transition-colors hover:text-red-500"
            >
              {section === "footer"
                ? "Contact"
                : section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden"
      >
        {/* Фон всегда видимый */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/1.png')" }}
        />

        {/* Полупрозрачный overlay для читаемости текста */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

        {/* Контент */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Professional Sound. Minimal Size.
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The new NordWave Mini Interface v2 — studio quality audio wherever you
          go.
        </motion.p>

        <div className="flex gap-4 relative z-10">
          <motion.button
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold transition shadow-md"
            onClick={() => scrollTo("pricing")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Buy Now
          </motion.button>
          <motion.button
            className="px-6 py-3 border border-white rounded-xl transition shadow-md"
            onClick={() => scrollTo("features")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <button
            onClick={() => scrollTo("features")}
            className="text-white text-3xl"
          >
            ↓
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <motion.section
        id="features"
        className="bg-black text-white py-20 px-4 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Полупрозрачный фон */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 -z-10"
          style={{ backgroundImage: "url('/features-bg.jpg')" }}
        />
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Why NordWave Mini?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Low-Latency Monitoring",
              text: "Record with zero delay — ideal for vocals, guitars, and beatmakers.",
            },
            {
              title: "High-Gain Preamps",
              text: "Clean, powerful amplification for any microphone.",
            },
            {
              title: "Ultra Portable",
              text: "Small body, premium components — take your studio anywhere.",
            },
            {
              title: "Cross-Platform Support",
              text: "Works with Mac, Windows, iPhone and iPad.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                boxShadow: "0 0 20px rgba(255,255,255,0.5)",
                scale: 1.02,
                transition: { duration: 0.05 },
              }}
              className="p-6 bg-white/5 rounded-2xl border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        className="bg-black text-white py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          What People Say
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Alex R.",
              text: "Best mini interface for mobile recording — sounds incredible!",
            },
            {
              name: "Maria L.",
              text: "Perfect for beatmakers, ultra portable and high quality.",
            },
            {
              name: "John D.",
              text: "Small device, huge sound. I love it!",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{
                boxShadow: "0 0 20px rgba(255,255,255,0.5)",
                scale: 1.02,
                transition: { duration: 0.05 },
              }}
              className="p-6 bg-white/5 rounded-2xl border border-white/10"
            >
              <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
              <h4 className="font-semibold">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PRICING */}
      <motion.section
        id="pricing"
        className="bg-white text-black py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Get Your NordWave Mini
        </h2>
        <p className="text-center text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-12">
          Studio-quality audio interface in a compact size. Perfect for mobile
          recording and home studios.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-12 py-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
          >
            <h3 className="text-2xl font-semibold mb-4">NordWave Mini v2</h3>
            <p className="text-gray-300 text-lg mb-6">$249</p>
            <button className="px-8 py-3 bg-red-500 hover:bg-red-600 rounded-xl font-semibold transition shadow-md hover:scale-105">
              Buy Now
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.footer
        id="footer"
        initial={{ opacity: 0, y: 50 }}
        animate={footerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-black text-white py-12 px-4 relative overflow-hidden"
      >
        {/* Фон для футера */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 -z-10"
          style={{ backgroundImage: "url('/footer-bg.jpg')" }}
        />
        <div className="max-w-6xl mx-auto text-center text-gray-400 space-y-6 relative z-10">
          <p>&copy; 2025 NordWave. All rights reserved.</p>

          {/* CONTACT FORM */}
          <form className="flex flex-col gap-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-600 bg-black text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg border border-gray-600 bg-black text-white"
            />
            <textarea
              placeholder="Message"
              className="p-3 rounded-lg border border-gray-600 bg-black text-white"
            ></textarea>
            <button className="px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-xl font-semibold transition shadow-md hover:scale-105">
              Send
            </button>
          </form>

          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </motion.footer>

      {/* SCROLL TO TOP */}
      {scrollY > 200 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition"
        >
          ↑
        </button>
      )}
    </main>
  );
}
