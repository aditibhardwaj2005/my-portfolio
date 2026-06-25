"use client";

import Link from "next/link";
import { RevealOnScroll } from "@/app/components/RevealOnScroll";

export default function Projects() {
  const projects = [
    {
      title: "TruthVerify - Fake News Detection AI",
      description:
        "TruthVerify uses advanced AI analysis to identify fake news and misinformation in real-time. Trust verified information.",
      tech: ["React", "Next.js", "Gemini", "Tailwind CSS", "JavaScript"],
      link: "https://truth-verify-sigma.vercel.app/",
      codeLink: "https://github.com/aditibhardwaj2005/Truth-Verify",
    },
    {
      title: "Student Task Manager",
      description:
        "A web application for managing student tasks and deadlines with a clean, intuitive interface.",
      tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      link: "https://student-task-manager-ruddy.vercel.app",
      codeLink: "https://github.com/aditibhardwaj2005/Student-Task-Manager",
    },
    {
      title: "Auth App",
      description:
        "A complete authentication application with secure login, registration, and session management.",
      tech: ["React", "Next.js", "Tailwind CSS", "MySQL"],
      link: "https://auth-app-reddu.vercel.app",
      codeLink: "https://github.com/aditibhardwaj2005/Auth-App",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive personal portfolio website built with React and Vite.",
      tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      link: "https://aditi-portfolio-react.vercel.app",
      codeLink: "https://github.com/aditibhardwaj2005/my-portfolio",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "120px 0",
        backgroundColor: "var(--bg-primary)",
        transition: "background-color 0.3s ease",
      }}
    >
      <RevealOnScroll>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "640px",
            padding: "0 22px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="apple-section-tag">Work</span>
            <h2 className="apple-headline" style={{ marginTop: "0.5rem" }}>
              Featured Projects
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      className="apple-card"
      style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontSize: "0.9375rem",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: "0 0 0.375rem",
            letterSpacing: "-0.01em",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: "0.8125rem",
            lineHeight: 1.65,
            color: "var(--text-secondary)",
            margin: 0,
          }}
        >
          {project.description}
        </p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
        {project.tech.map((tech) => (
          <span key={tech} className="apple-badge">
            {tech}
          </span>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          paddingTop: "0.75rem",
          borderTop: "1px solid var(--border)",
        }}
      >
        <Link
          href={project.codeLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "0.8125rem",
            fontWeight: 500,
            color: "var(--accent)",
            textDecoration: "none",
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          View Code
        </Link>
        <span style={{ color: "var(--border-strong)", fontSize: "0.8125rem" }}>|</span>
        <Link
          href={project.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "0.8125rem",
            fontWeight: 500,
            color: "var(--accent)",
            textDecoration: "none",
            transition: "opacity 0.2s ease",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Live Demo
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </Link>
      </div>
    </div>
  );
}