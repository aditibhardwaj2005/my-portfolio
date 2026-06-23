"use client";

import Link from "next/link";
import { RevealOnScroll } from "@/app/components/RevealOnScroll";

export default function Projects() {
  const projects = [
    {
      title: "TruthVerify - Fake News Detection AI",
      description:
        "TruthVerify uses advanced AI analysis to identify fake news and misinformation in real-time. Trust verified information.",
      tech: ["React", "Next.js", "Gemini", "Tailwindcss", "JavaScript"],
      link: "https://truth-verify-sigma.vercel.app/",
      codeLink: "https://github.com/aditibhardwaj2005/Truth-Verify"
    },
    {
      title: "Student Task Manager",
      description:
        "A web application for managing student tasks and deadlines.",
      tech: ["React", "Next.js", "Tailwindcss", "TypeScript"],
      link: "https://student-task-manager-ruddy.vercel.app",
      codeLink: "https://github.com/aditibhardwaj2005/Student-Task-Manager"
    },
    {
      title: "Auth App",
      description:
        "A simple authentication app built with React and Next.js.",
      tech: ["React", "Next.js", "Tailwindcss", "MySQL"],
      link: "https://auth-app-reddu.vercel.app",
      codeLink: "https://github.com/aditibhardwaj2005/Auth-App"
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive personal portfolio website built with React and Next.js.",
      tech: ["React", "Vite", "Tailwindcss", "JavaScript"],
      link: "https://aditi-portfolio-react.vercel.app",
      codeLink: "https://github.com/aditibhardwaj2005/my-portfolio"
    },
  ];

  return (
    <section
      id="projects"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
              >
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>

                <p className="mb-4 text-gray-400">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.codeLink || '#'}
                  target="_blank"
                  className="text-blue-400 transition-colors hover:text-blue-300"
                >
                  Code
                <span className="mx-2 text-gray-500">|</span>
                </Link>

                <Link
                  href={project.link || '#'}
                  target="_blank"
                  className="text-blue-400 transition-colors hover:text-blue-300"
                >
                  Live Demo →
                </Link>
              </div>
            ))}
          </div>
        </div>
        

      </RevealOnScroll>
    </section>
  );
}
