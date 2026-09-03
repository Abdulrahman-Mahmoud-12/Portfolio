"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, AlertCircle } from "lucide-react";
import { contact } from "@/content/site";
import SectionHeading from "@/components/ui/SectionHeading";

/* Brand-colored social link buttons */
const socials = [
  {
    label: "LinkedIn",
    handle: contact.linkedinHandle,
    href: `https://${contact.linkedin}`,
    bg: "#0A66C2",
    border: "#0A66C2",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    handle: `@${contact.githubHandle}`,
    href: `https://${contact.github}`,
    bg: "#24292E",
    border: "#444",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    handle: contact.whatsapp,
    href: `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`,
    bg: "#25D366",
    border: "#25D366",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    handle: contact.email,
    href: `mailto:${contact.email}?subject=Project%20Inquiry%20%2F%20Collaboration&body=Hi%20Abdelrahman%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20collaboration.%0A%0ABest%20regards%2C`,
    bg: "#EA4335",
    border: "#EA4335",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
      </svg>
    ),
  },
];

interface FormState { name: string; email: string; subject: string; message: string; }
type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm]     = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormState]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) { setStatus("success"); setStatusMsg("Message sent! I'll get back to you soon."); setForm({ name: "", email: "", subject: "", message: "" }); }
      else { const d = await res.json().catch(() => ({})); setStatus("error"); setStatusMsg(d.error || "Something went wrong."); }
    } catch { setStatus("error"); setStatusMsg("Network error. Please try again."); }
  };

  const inp = (field: keyof FormState) =>
    `w-full px-4 py-3 rounded-xl bg-surface border text-white text-sm placeholder:text-muted/40 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all ${errors[field] ? "border-red-500/60" : "border-white/10 hover:border-white/20"}`;

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading number="09" title="Contact" subtitle={contact.closingLine} />

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── Social buttons ── */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-white font-bold text-lg mb-6">Connect with me</h3>
            <div className="space-y-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.07] bg-surface/40 hover:border-white/15 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 group"
                >
                  {/* Brand icon block */}
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: s.bg }}>
                    {s.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/50 text-[10px] font-mono uppercase tracking-wider">{s.label}</p>
                    <p className="text-white text-sm font-medium truncate mt-0.5">{s.handle}</p>
                  </div>
                  <svg className="w-4 h-4 text-muted/40 group-hover:text-muted transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="mt-6 flex items-center gap-3 text-muted text-sm">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {contact.location}
            </div>
          </motion.div>

          {/* ── Contact form ── */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form onSubmit={handleSubmit} noValidate className="card p-7 space-y-4">
              <h3 className="text-white font-bold text-lg mb-2">Send a Message</h3>
              <div>
                <label className="block text-xs font-medium text-muted mb-1.5">Full Name <span className="text-accent">*</span></label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" className={inp("name")} />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-muted mb-1.5">Email <span className="text-accent">*</span></label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" className={inp("email")} />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-muted mb-1.5">Subject <span className="text-accent">*</span></label>
                <input name="subject" value={form.subject} onChange={handleChange} placeholder="Project inquiry / Collaboration" className={inp("subject")} />
                {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-muted mb-1.5">Message <span className="text-accent">*</span></label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell me about your project..." className={`${inp("message")} resize-none`} />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>
              <button type="submit" disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-accent to-cyan-300 text-bg-base hover:shadow-glow-accent transition-all active:scale-[0.97] disabled:opacity-60">
                {status === "loading" ? <span className="w-4 h-4 border-2 border-bg-base/30 border-t-bg-base rounded-full animate-spin" /> : <Send size={16} />}
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>
              {status === "success" && (
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-xl px-4 py-3 text-sm">
                  <Check size={15} className="shrink-0" /> {statusMsg}
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3 text-sm">
                  <AlertCircle size={15} className="shrink-0" /> {statusMsg}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
