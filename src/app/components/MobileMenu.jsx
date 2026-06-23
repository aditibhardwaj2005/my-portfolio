"use client";

import Link from "next/link";

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center
        bg-[rgba(10,10,10,0.95)]
        transition-all duration-500 ease-in-out
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute right-6 top-6 text-5xl text-white transition-colors hover:text-blue-400"
        aria-label="Close menu"
      >
        ×
      </button>

      {/* Links */}
      <div className="flex flex-col items-center space-y-10">
        {["home", "about", "projects", "contact"].map((item, i) => (
          <Link
            key={item}
            href={`#${item}`}
            onClick={() => setMenuOpen(false)}
            className={`text-4xl font-bold text-white transition-all duration-300 hover:text-blue-400
              ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
              delay-[${i * 100}ms]`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
}
