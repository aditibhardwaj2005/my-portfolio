"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState("loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const interval = 16;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const eased = 1 - Math.pow(1 - current / steps, 3);
      setProgress(Math.min(eased * 100, 100));

      if (current >= steps) {
        clearInterval(timer);
        setPhase("done");
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--bg-primary)",
        opacity: phase === "done" ? 0 : 1,
        transition: "opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
        gap: "2.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: phase === "done" ? 0 : 1,
          transform: phase === "done" ? "translateY(-8px)" : "translateY(0)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        <p
          style={{
            fontSize: "0.6875rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--accent)",
            margin: 0,
          }}
        >
          Portfolio
        </p>
        <p
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: "var(--text-primary)",
            margin: 0,
            textAlign: "center",
          }}
        >
          Aditi Bhardwaj
        </p>
      </div>

      <div
        style={{
          width: "120px",
          height: "1px",
          backgroundColor: "var(--progress-track)",
          borderRadius: "9999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "var(--accent)",
            borderRadius: "9999px",
            transition: "width 0.05s linear",
          }}
        />
      </div>
    </div>
  );
}