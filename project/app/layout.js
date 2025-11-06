// Note: This is the App Router layout (app/layout.js). Files inside the app/ directory
// use the App Router and this layout will wrap app/page.js and other app routes.
import "./globals.css";
import Head from "next/head";
import { defaultSEO } from "./utils/seo";
import { siteContent } from "./content";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "SkillEdge",
  description: "Modern web experiences by SkillEdge",
};

export default function RootLayout({ children }) {
  const seo = defaultSEO(siteContent);
  const ogImage = seo?.openGraph?.images?.[0]?.url;

  return (
    <html lang="en">
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        {seo.canonical && <link rel="canonical" href={seo.canonical} />}

        <meta property="og:type" content={seo.openGraph.type || "website"} />
        {seo.openGraph.url && <meta property="og:url" content={seo.openGraph.url} />}
        <meta property="og:title" content={seo.openGraph.title} />
        <meta property="og:description" content={seo.openGraph.description} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta name="twitter:card" content={seo.twitter.cardType || "summary_large_image"} />

        <link rel="icon" href={siteContent.logo} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      {/* Background gradient moved to app/globals.css to avoid @apply/utility issues */}
      <body className="font-sans text-slate-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
