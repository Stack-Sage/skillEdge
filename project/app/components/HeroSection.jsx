"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteContent } from "../content";

export default function HeroSection() {
  return (
    <section className="py-20">
      <div className="container-max grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {siteContent.companyName}
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-xl">{siteContent.tagline}</p>
          <div className="mt-8 flex gap-4">
            <a href="/signup" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow scale-hover scale-press">Get started</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium border border-slate-200 bg-white/60 text-slate-900">Learn more</a>
          </div>
        </motion.div>
        <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
          <div className="glass overflow-hidden">
            <Image src={siteContent.heroImage} alt="Hero" width={900} height={600} className="w-full h-auto object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
