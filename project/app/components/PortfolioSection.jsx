"use client";
import Image from "next/image";
import { siteContent } from "../content";
import { motion } from "framer-motion";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16">
      <div className="container-max">
        <h2 className="text-2xl font-semibold mb-6">Portfolio</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {siteContent.portfolio.map((p) => (
            <motion.div key={p.id} whileHover={{ scale: 1.03 }} className="rounded-xl overflow-hidden border transition-all duration-200">
              <Image src={p.img} alt={p.name} width={800} height={500} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-medium">{p.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
