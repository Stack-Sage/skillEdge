"use client";
import { useState } from "react";
import { siteContent } from "../content";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-16">
      <div className="container-max">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-slate-600 mb-6">
          Reach us at <a className="underline" href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a> or WhatsApp: {siteContent.contact.phone}
        </p>
        {!submitted ? (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="grid gap-4 sm:grid-cols-2">
            <input name="name" placeholder="Your name" className="p-3 border rounded-md" required />
            <input name="email" placeholder="Email" className="p-3 border rounded-md" type="email" required />
            <textarea name="message" placeholder="Message" className="p-3 border rounded-md sm:col-span-2" rows={5} required />
            <button type="submit" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow sm:col-span-2">Send message</button>
          </form>
        ) : (
          <div className="p-6 glass">Thanks — your message is noted. (Integrate EmailJS/Nodemailer to wire real submissions.)</div>
        )}
      </div>
    </section>
  );
}
