"use client";

import Link from "next/link";
import { RevealOnScroll } from "@/app/components/RevealOnScroll";

export default function Home() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--bg-primary)",
        paddingTop: "44px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,113,227,0.06) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <RevealOnScroll>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 22px",
            maxWidth: "720px",
          }}
        >
          <span className="apple-section-tag">Portfolio</span>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.08,
              color: "var(--text-primary)",
              margin: "0 0 1rem",
            }}
          >
            Hi, I&apos;m Aditi Bhardwaj.
          </h1>

          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              margin: "0 auto 2rem",
              maxWidth: "420px",
            }}
          >
            A passionate web developer specializing in React and modern frontend
            technologies.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.75rem",
            }}
          >
            <Link href="#projects" className="apple-btn-primary">
              View Projects
            </Link>

            <Link
              href="https://drive.google.com/drive/folders/12j2RBKSeEqx5btbCdY4CO0N3Y_7TSzAZ?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-secondary"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}