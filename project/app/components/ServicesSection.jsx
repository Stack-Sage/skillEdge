"use client";
import { motion } from "framer-motion";
import { siteContent } from "../content";

export default function ServicesSection() {
  return (
    <section id="features" className="py-16 bg-transparent">
      <div className="container-max">
        <h2 className="text-2xl font-semibold mb-6">Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.services.map((s) => (
            <motion.div key={s.id} whileHover={{ y: -6, scale: 1.03 }} className="p-6 glass transition-all duration-200">
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
