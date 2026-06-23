"use client";

import { useState } from "react";

import LoadingScreen from "@/app/components/LoadingScreen";
import Navbar from "@/app/components/Navbar";
import MobileMenu from "@/app/components/MobileMenu";

import Home from "@/app/components/section/Home";
import About from "@/app/components/section/About";
import Projects from "@/app/components/section/Projects";
import Contact from "@/app/components/section/Contact";


export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      )}

      <div
        className={`min-h-screen transition-opacity duration-700 
          ${isLoaded ? "opacity-100" : "opacity-0"} 
          bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
