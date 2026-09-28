import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";
import { portfolio as p } from "@/data/portfolio";

export const metadata = {
  title: `${p.name} — ${p.role}`,
  description: p.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <div className="bg" aria-hidden />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Effects />
      </body>
    </html>
  );
}
