
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import AsideIcon from "./components/aside-social";
import Head from "next/head";
//components

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "David Dubuc Portfolio",
  description: "Welcome to David Dubuc web development service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>


        <Analytics />
        <header className="navbar-element">
          {children}
          <Navbar />
        </header>
        <AsideIcon />
        <Footer />

      </body>
    </html>
  );
}
