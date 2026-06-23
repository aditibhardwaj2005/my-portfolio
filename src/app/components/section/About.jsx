"use client";

import { RevealOnScroll } from "@/app/components/RevealOnScroll";

export default function About() {
  const frontendSkills = ["React", "Vite", "Next.js", "Tailwindcss", "TypeScript"];
  const backendSkills = ["Node.js", "JavaScript", "AWS", "MongoDB", "MySQL"];

  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="rounded-xl border border-white/10 p-8 transition-all hover:-translate-y-1">
            <p className="mb-6 text-gray-300">
              I'm Aditi Bhardwaj, a dedicated web developer with a passion for
              creating dynamic and responsive web applications. With a strong
              foundation in HTML, CSS, and JavaScript, I specialize in building
              user-friendly interfaces using React. I enjoy turning complex
              problems into simple, beautiful, and intuitive designs.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Frontend */}
              <div className="rounded-xl p-6 transition-all hover:-translate-y-1">
                <h3 className="mb-4 text-xl font-bold">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-xl p-6 transition-all hover:-translate-y-1">
                <h3 className="mb-4 text-xl font-bold">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400 transition hover:bg-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1">
              <h3 className="mb-4 text-xl font-bold">🏫 Education</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-300">
                <li>
                  <strong>B.Tech in Computer Science</strong> – Quantum
                  University (2023–2027)
                </li>
                <li>
                  Relevant Coursework: DSA, Web Development, DBMS, Cloud
                  Computing
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1">
              <h3 className="mb-4 text-xl font-bold">🏢 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Web Developer – Webneeds (September 2025 – October 2025)
                  </h4>
                  <p>
                    Developed and maintained responsive web applications. Worked on frontend and backend features. Collaborated with team members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}