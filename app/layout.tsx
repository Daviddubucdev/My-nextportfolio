import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { useRouter } from "next/router";
import "./globals.css";
import Navbar from "./components/Navbar";
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
      <body className={inter.className}>{children}
        <div className="navbar-element">
          <Navbar ></Navbar>
        </div>
        <main>
        </main>
        <footer>
          <div className="container-icon">
            <div className="social-icons">
              <a href="https://github.com/your-github-profile">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/your-linkedin-profile">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/your-instagram-profile">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/your-facebook-profile">
                <FaFacebook />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
