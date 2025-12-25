"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // 🛑 Honeypot (анти-бот)
    if (formData.get("company")) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white py-12 px-4 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center text-white-400 space-y-8 relative z-10">
        <p>&copy; 2025 NordWave. All rights reserved.</p>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col gap-3"
          aria-live="polite"
        >
          {/* 🕵️ Honeypot */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <input
            name="name"
            required
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-700 bg-black text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="p-3 rounded-lg border border-gray-700 bg-black text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
          />

          <textarea
            name="message"
            required
            placeholder="Message"
            rows={4}
            className="p-3 rounded-lg border border-gray-700 bg-black text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition resize-none"
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={!loading ? { scale: 1.05 } : {}}
            whileTap={!loading ? { scale: 0.95 } : {}}
            className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-semibold transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.p
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-green-500 mt-2"
              >
                ✔ Message sent successfully
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-red-500 mt-2"
              >
                ❌ Something went wrong. Try again.
              </motion.p>
            )}
          </AnimatePresence>
        </form>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="hover:text-red-500 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-red-500 transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-red-500 transition">
            Contact
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
