"use client";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  text: string;
  icon: React.ReactNode;
}

export default function FeatureCard({ title, text, icon }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        boxShadow: "0 0 35px rgba(255,255,255,0.12)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative h-full bg-black/30 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center backdrop-blur-md"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{text}</p>

      {/* subtle glow */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none shadow-inner shadow-white/5" />
    </motion.div>
  );
}
