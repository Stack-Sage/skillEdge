"use client";
import { siteContent } from "../content";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container-max py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} {siteContent.companyName}</div>
        <div className="flex gap-4 text-sm">
          <a href={siteContent.contact.instagram} className="underline">Instagram</a>
          <a href={`mailto:${siteContent.contact.email}`} className="underline">Email</a>
        </div>
      </div>
    </footer>
  );
}
