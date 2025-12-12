"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget as HTMLFormElement; // типизируем явно
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
        form.reset(); // теперь TypeScript понимает, что это HTMLFormElement
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
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 -z-10"
        style={{ backgroundImage: "url('/footer-bg.jpg')" }}
      />

      <div className="max-w-xs sm:max-w-6xl mx-auto text-center text-gray-400 space-y-6 relative z-10">
        <p>&copy; 2025 NordWave. All rights reserved.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="p-2 sm:p-3 rounded-lg border border-gray-600 bg-black text-white"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="p-2 sm:p-3 rounded-lg border border-gray-600 bg-black text-white"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="p-2 sm:p-3 rounded-lg border border-gray-600 bg-black text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-4 sm:px-8 py-2 sm:py-3 bg-white text-black hover:bg-gray-200 rounded-xl font-semibold transition shadow-md hover:scale-105 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {status === "success" && (
            <p className="text-green-400 mt-2">✔ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-500 mt-2">
              ❌ Failed to send message. Please try again.
            </p>
          )}
        </form>

        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 text-sm sm:text-base">
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
  );
}
