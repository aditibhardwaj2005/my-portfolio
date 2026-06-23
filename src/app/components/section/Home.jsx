"use client";

import Link from "next/link";
import { RevealOnScroll } from "@/app/components/RevealOnScroll";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center"
    >
      <RevealOnScroll>
        <div className="z-10 px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent md:text-7xl">
            Hi, I am Aditi Bhardwaj
          </h1>

          <p className="mx-auto mb-8 max-w-lg text-lg text-gray-400">
            A passionate web developer specializing in React and modern frontend
            technologies.
          </p>

          <div className="flex justify-center space-x-4">
            <Link
              href="#projects"
              className="relative rounded bg-blue-500 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </Link>

            <Link
              href="https://drive.google.com/drive/folders/12j2RBKSeEqx5btbCdY4CO0N3Y_7TSzAZ?usp=sharing"
              target="_blank"
              className="rounded border border-blue-500/50 px-6 py-3 font-medium text-blue-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
