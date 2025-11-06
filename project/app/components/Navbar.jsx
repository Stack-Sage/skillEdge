"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteContent } from "../content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="w-full sticky top-4 z-50"
    >
      <div className="container-max flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-full overflow-hidden w-10 h-10 bg-white/80 shadow-md">
            <Image src={siteContent.logo} alt={siteContent.companyName} width={40} height={40} />
          </div>
          <span className="font-semibold text-lg">{siteContent.companyName}</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm items-center">
          <a href="#features" className="text-slate-500 hover:text-slate-900 transition">Features</a>
          <a href="#pricing" className="text-slate-500 hover:text-slate-900 transition">Pricing</a>
          <a href="#portfolio" className="text-slate-500 hover:text-slate-900 transition">Portfolio</a>
          <a href="#contact" className="text-slate-500 hover:text-slate-900 transition">Contact</a>
          <Link href="/signup" className="ml-4 inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-transform duration-200 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow scale-hover scale-press">Get started</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="p-2 rounded-md border bg-white/60">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} className="md:hidden container-max bg-white/70 rounded-lg p-4 shadow">
          <div className="flex flex-col gap-3">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
            <Link href="/signup" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow">Get started</Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
