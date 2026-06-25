"use client";

import { useState } from "react";

import LoadingScreen from "@/app/components/LoadingScreen";
import Navbar from "@/app/components/Navbar";
import MobileMenu from "@/app/components/MobileMenu";
import ThemeProvider from "@/app/components/ThemeProvider";

import Home from "@/app/components/section/Home";
import About from "@/app/components/section/About";
import Projects from "@/app/components/section/Projects";
import Contact from "@/app/components/section/Contact";

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      {!isLoaded && (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      )}

      <div
        className={`min-h-screen transition-opacity duration-700 
          ${isLoaded ? "opacity-100" : "opacity-0"} 
          bg-[var(--bg-primary)] text-[var(--text-primary)]`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}