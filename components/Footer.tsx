"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white py-10 sm:py-12 px-4 relative overflow-hidden"
    >
      <div className="max-w-xs sm:max-w-6xl mx-auto text-center text-gray-400 space-y-6 relative z-10">
        <p>&copy; 2025 NordWave. All rights reserved.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="p-2 sm:p-3 rounded-lg border border-gray-600 bg-black text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="p-2 sm:p-3 rounded-lg border border-gray-600 bg-black text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="p-2 sm:p-3 rounded-lg border border-gray-600 bg-black text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(255,0,0,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-8 py-2 sm:py-3 bg-red-600 text-white hover:bg-red-700 rounded-xl font-semibold transition shadow-md w-full sm:w-auto disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>

          <AnimatePresence>
            {status === "success" && (
              <motion.p
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="text-green-600 mt-2 flex items-center justify-center gap-2"
              >
                ✔ Message sent successfully!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="text-red-500 mt-2 flex items-center justify-center gap-2"
              >
                ❌ Failed to send message. Please try again.
              </motion.p>
            )}
          </AnimatePresence>
        </form>

        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 text-sm sm:text-base">
          <a href="#" className="hover:text-red-700 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-red-700 transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-red-700 transition">
            Contact
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
