"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "@/app/components/ThemeProvider";

const navLinks = ["home", "about", "projects", "contact"];

export default function Navbar({ menuOpen, setMenuOpen }) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "44px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "var(--nav-bg)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "border-color 0.3s ease",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "980px",
          margin: "0 auto",
          padding: "0 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Link
          href="#home"
          style={{
            fontSize: "1.0625rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "var(--text-primary)",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          Aditi Bhardwaj
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0",
            }}
            className="nav-links-desktop"
          >
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  padding: "0 1rem",
                  transition: "color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "none",
              background: "transparent",
              color: "var(--text-secondary)",
              cursor: "pointer",
              transition: "color 0.2s ease, background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--bg-secondary)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
            className="theme-toggle-desktop"
          >
            {theme === "light" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2m-7.07-14.07 1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2m-4.93 7.07-1.41-1.41M6.34 6.34 4.93 4.93" />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "30px",
              height: "30px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              gap: "5px",
              padding: "4px",
            }}
            className="hamburger-mobile"
          >
            <span
              style={{
                display: "block",
                width: "18px",
                height: "1.5px",
                backgroundColor: "var(--text-primary)",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transformOrigin: "center",
                transform: menuOpen ? "rotate(45deg) translate(4.5px, 4.5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "18px",
                height: "1.5px",
                backgroundColor: "var(--text-primary)",
                transition: "opacity 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "18px",
                height: "1.5px",
                backgroundColor: "var(--text-primary)",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transformOrigin: "center",
                transform: menuOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .nav-links-desktop { display: none !important; }
          .hamburger-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
