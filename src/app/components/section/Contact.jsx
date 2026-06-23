"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/app/components/RevealOnScroll";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ TEMP: hardcoded (works)
  const SERVICE_ID = "service_n8sjytg";
  const TEMPLATE_ID = "template_kh4wuth";
  const PUBLIC_KEY = "tjzCvrqRsmD3ndpp5";

  // ✅ BEST PRACTICE (use this later)
  // const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  // const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  // const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="w-full max-w-xl px-4">
          <h2 className="mb-8 text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Name..."
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
            />

            <textarea
              name="message"
              rows={5}
              required
              placeholder="Your Message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full rounded bg-blue-500 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}
