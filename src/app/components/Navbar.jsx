"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    // Lock scroll when menu is open
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg">
      <div className="mx-auto h-16 max-w-5xl px-4">
        <div className="flex h-full items-center justify-between">

          {/* Logo */}
          <Link href="#home" className="font-mono text-xl font-bold text-white">
            Aditi<span className="text-blue-500">Bhardwaj</span>
          </Link>

          {/* Hamburger (mobile) */}
          <div
            className="relative z-50 h-5 w-7 cursor-pointer md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className="absolute block h-0.5 w-full bg-white transition duration-300"
              style={{
                top: menuOpen ? "2px" : "0px",
                transform: menuOpen ? "rotate(45deg)" : "none",
              }}
            />
            <span
              className="absolute block h-0.5 w-full bg-white transition duration-300"
              style={{
                top: "8px",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="absolute block h-0.5 w-full bg-white transition duration-300"
              style={{
                top: menuOpen ? "8px" : "16px",
                transform: menuOpen ? "rotate(-45deg)" : "none",
              }}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            {["home", "about", "projects", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-gray-300 transition-colors hover:text-white"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
}
