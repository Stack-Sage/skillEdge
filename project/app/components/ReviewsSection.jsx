"use client";
import { siteContent } from "../content";
import { motion } from "framer-motion";

export default function ReviewsSection() {
  return (
    <section className="py-16">
      <div className="container-max">
        <h2 className="text-2xl font-semibold mb-6">What clients say</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {siteContent.reviews.map((r, i) => (
            <motion.blockquote key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} className="p-6 glass">
              <p className="text-slate-700">“{r.text}”</p>
              <footer className="mt-4 text-sm font-medium">— {r.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
