"use client";

import Link from "next/link";
import { useTheme } from "@/app/components/ThemeProvider";

const navLinks = ["home", "about", "projects", "contact"];

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--nav-bg)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        pointerEvents: menuOpen ? "auto" : "none",
        opacity: menuOpen ? 1 : 0,
        transition: "opacity 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
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
          }}
        >
          {theme === "light" ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2m-7.07-14.07 1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2m-4.93 7.07-1.41-1.41M6.34 6.34 4.93 4.93" />
            </svg>
          )}
        </button>
      </div>

      <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5rem" }}>
        {navLinks.map((item, i) => (
          <Link
            key={item}
            href={`#${item}`}
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: "2.5rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              textDecoration: "none",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) ${i * 60}ms, transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) ${i * 60}ms, color 0.2s ease`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </nav>
    </div>
  );
}