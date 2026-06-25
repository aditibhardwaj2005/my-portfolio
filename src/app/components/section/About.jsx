"use client";

import { RevealOnScroll } from "@/app/components/RevealOnScroll";

export default function About() {
  const frontendSkills = ["React", "Vite", "Next.js", "Tailwind CSS", "TypeScript"];
  const backendSkills = ["Node.js", "JavaScript", "AWS", "MongoDB", "MySQL"];

  return (
    <section
      id="about"
      style={{
        width: "100%",
        padding: "120px 0",
        backgroundColor: "var(--bg-secondary)",
        transition: "background-color 0.3s ease",
      }}
    >
      <RevealOnScroll>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "980px",
            padding: "0 22px",
            width: "100%",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="apple-section-tag">About</span>
            <h2 className="apple-headline" style={{ marginTop: "0.5rem" }}>
              Built with clarity and care.
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            <div className="apple-card" style={{ padding: "2rem" }}>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.75,
                  color: "var(--text-secondary)",
                  margin: "0 0 2rem",
                }}
              >
                I&apos;m Aditi Bhardwaj, a dedicated web developer with a passion for
                creating dynamic and responsive web applications. With a strong
                foundation in HTML, CSS, and JavaScript, I specialize in building
                user-friendly interfaces using React. I enjoy turning complex
                problems into simple, beautiful, and intuitive designs.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      margin: "0 0 0.875rem",
                    }}
                  >
                    Frontend
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {frontendSkills.map((tech) => (
                      <span key={tech} className="apple-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      margin: "0 0 0.875rem",
                    }}
                  >
                    Backend
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {backendSkills.map((tech) => (
                      <span key={tech} className="apple-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              }}
            >
              <div className="apple-card" style={{ padding: "2rem" }}>
                <p
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-tertiary)",
                    margin: "0 0 0.5rem",
                  }}
                >
                  Education
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    margin: "0 0 0.25rem",
                  }}
                >
                  B.Tech in Computer Science
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-secondary)",
                    margin: "0 0 0.3rem",
                  }}
                >
                  Quantum University (2023 – 2027)
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-tertiary)",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  Relevant Coursework: DSA, Web Development, DBMS, Cloud Computing
                </p>
              </div>

              <div className="apple-card" style={{ padding: "2rem" }}>
                <p
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-tertiary)",
                    margin: "0 0 0.625rem",
                  }}
                >
                  Work Experience
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    margin: "0 0 0.25rem",
                  }}
                >
                  Web Developer — Webneeds
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-secondary)",
                    margin: "0 0 0.625rem",
                  }}
                >
                  September 2025 – October 2025
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Developed and maintained responsive web applications. Worked on
                  frontend and backend features. Collaborated with team members.
                </p>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}