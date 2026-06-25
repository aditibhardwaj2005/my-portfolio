"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/app/components/RevealOnScroll";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const SERVICE_ID = "service_n8sjytg";
  const TEMPLATE_ID = "template_kh4wuth";
  const PUBLIC_KEY = "tjzCvrqRsmD3ndpp5";

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <section
      id="contact"
      style={{
        width: "100%",
        backgroundColor: "var(--bg-secondary)",
        padding: "120px 22px",
        transition: "background-color 0.3s ease",
      }}
    >
      <RevealOnScroll>
        <div
          style={{
            margin: "0 auto",
            maxWidth: "520px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3rem", width: "100%" }}>
            <span className="apple-section-tag">Contact</span>
            <h2 className="apple-headline" style={{ marginTop: "0.5rem", marginBottom: "1rem", fontSize: "2rem" }}>
              Get in touch.
            </h2>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Have a question or want to work together? Send a message.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="apple-input"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="apple-input"
            />

            <textarea
              name="message"
              rows={5}
              required
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="apple-input"
              style={{ resize: "vertical" }}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="apple-btn-primary"
              style={{
                width: "100%",
                opacity: status === "sending" ? 0.7 : 1,
                cursor: status === "sending" ? "not-allowed" : "pointer",
              }}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "success" && (
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.875rem",
                  color: "#30d158",
                  margin: 0,
                }}
              >
                Message sent successfully.
              </p>
            )}
            {status === "error" && (
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.875rem",
                  color: "#ff3b30",
                  margin: 0,
                }}
              >
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          <footer
            style={{
              marginTop: "5rem",
              width: "100%",
              borderTop: "1px solid var(--border)",
              paddingTop: "2rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--text-tertiary)",
                letterSpacing: "0.02em",
                margin: 0,
              }}
            >
              © 2026 Aditi Bhardwaj. All rights reserved.
            </p>
          </footer>
        </div>
      </RevealOnScroll>
    </section>
  );
}