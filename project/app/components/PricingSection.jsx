"use client";
import { motion } from "framer-motion";
import { siteContent } from "../content";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16">
      <div className="container-max">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {siteContent.pricing.map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.04 }} className="p-6 glass text-center transition-all duration-200">
              <h3 className="font-bold text-lg">{p.tier}</h3>
              <p className="mt-2 text-3xl font-extrabold">{p.price}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map((f, idx) => <li key={idx}>• {f}</li>)}
              </ul>
              <div className="mt-6">
                <a href="/signup" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow">Choose</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
